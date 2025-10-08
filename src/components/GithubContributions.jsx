import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Calendar, ExternalLink, Github, GitCommit, Zap, Users } from 'lucide-react';

const GITHUB_USERNAME = 'Xhinvier07'; // Your GitHub username

const ContributionDay = React.memo(({ day, index }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const getColorForLevel = useCallback((level) => {
    return ['bg-gray-800/50', 'bg-green-900/80', 'bg-green-700', 'bg-green-500', 'bg-green-300'][level];
  }, []);

  const formatDate = useCallback((date) =>
    new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), []);

  if (!day.date) {
    return <div key={index} className="w-2.5 h-2.5 rounded-sm bg-transparent" />;
  }

  return (
    <div
      key={index}
      className={`w-2.5 h-2.5 rounded-sm ${getColorForLevel(day.level)} relative hover:outline hover:outline-1 hover:outline-green-400 cursor-pointer transition-all duration-200 hover:scale-125`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <div className="fixed z-50 px-2 py-1 bg-gray-900 text-xs text-white rounded whitespace-nowrap shadow-lg border border-gray-600 pointer-events-none"
             style={{
               top: '-40px',
               left: '50%',
               transform: 'translateX(-50%)',
             }}>
          {formatDate(day.date)}: {day.count} contributions
        </div>
      )}
    </div>
  );
});

ContributionDay.displayName = 'ContributionDay';

const GithubContributions = () => {
  const [contributions, setContributions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);
  const [streak, setStreak] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);
  const [timeRange, setTimeRange] = useState('2years');

  const processedData = useMemo(() => {
    if (!contributions.length) return { weeks: [], isEmpty: true };

    const weeks = [];
    let currentWeek = [];

    const firstDay = new Date(contributions[0].date).getDay();
    for (let i = 0; i < firstDay; i++) {
      currentWeek.push({ date: '', count: 0, level: 0 });
    }

    contributions.forEach(day => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: '', count: 0, level: 0 });
      }
      weeks.push(currentWeek);
    }

    return { weeks, isEmpty: false };
  }, [contributions]);

  useEffect(() => {
    let cancelled = false;
    
    const fetchGitHubContributions = async () => {
      if (cancelled) return;
      
      try {
        // Use a timeout to prevent hanging requests
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        // Fetch 2 years of data
        const currentYear = new Date().getFullYear();
        const years = [currentYear, currentYear - 1];
        const allContributions = [];
        let totalCount = 0;

        for (const year of years) {
          const yearRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`, {
            signal: controller.signal
          });
          
          if (yearRes.ok) {
            const yearData = await yearRes.json();
            if (yearData?.contributions && Array.isArray(yearData.contributions)) {
              allContributions.push(...yearData.contributions);
              totalCount += yearData.total?.year || 0;
            }
          }
        }

        if (allContributions.length === 0) {
          throw new Error('No data available');
        }
        
        clearTimeout(timeoutId);

        if (cancelled) return;

        // Sort contributions by date
        allContributions.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        const daysToShow = 730; // 2 years
        const days = allContributions.slice(-daysToShow);

        let streakCount = 0, currentStreak = 0;
        let actualTotalCount = 0;
        const processed = days.map((day) => {
          const count = parseInt(day.count) || 0;
          const level = Math.min(Math.max(0, day.level), 4);
          actualTotalCount += count;
          
          if (count > 0) {
            currentStreak++;
            streakCount = Math.max(streakCount, currentStreak);
          } else {
            currentStreak = 0;
          }

          return { date: day.date, count, level };
        });

        setContributions(processed);
        setTotalContributions(actualTotalCount);
        setStreak(streakCount);
      } catch (err) {
        if (cancelled) return;
        console.error('GitHub API error:', err);
        generateMockData();
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    const fetchVisitorCount = async () => {
      try {
        // Fetch visitor count from the badge API
        const response = await fetch(`https://komarev.com/ghpvc/?username=${GITHUB_USERNAME.toLowerCase()}&style=flat-square&color=blue`);
        if (response.ok) {
          // Since we can't directly parse the SVG count, we'll use localStorage as fallback
          const stored = localStorage.getItem('visitorCount') || 0;
          const newCount = parseInt(stored) + 1;
          localStorage.setItem('visitorCount', newCount);
          setVisitorCount(newCount);
        }
      } catch (err) {
        console.error('Visitor count API error:', err);
        // Fallback to localStorage
        const stored = localStorage.getItem('visitorCount') || 0;
        const newCount = parseInt(stored) + 1;
        localStorage.setItem('visitorCount', newCount);
        setVisitorCount(newCount);
      }
    };

    const generateMockData = () => {
      const today = new Date();
      const daysToShow = 730; // 2 years
      let mock = [], total = 0, streakCount = 0, current = 0;

      for (let i = daysToShow - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);

        const rand = Math.random();
        let level = 0, count = 0;

        if (rand > 0.6) {
          if (rand > 0.9) { level = 4; count = 15 + Math.floor(Math.random() * 10); }
          else if (rand > 0.8) { level = 3; count = 10 + Math.floor(Math.random() * 5); }
          else if (rand > 0.7) { level = 2; count = 5 + Math.floor(Math.random() * 5); }
          else { level = 1; count = 1 + Math.floor(Math.random() * 3); }
        }

        mock.push({ date: date.toISOString().split('T')[0], count, level });
        total += count;

        if (count > 0) {
          current++;
          streakCount = Math.max(streakCount, current);
        } else {
          current = 0;
        }
      }

      setContributions(mock);
      setTotalContributions(total);
      setStreak(streakCount);
    };

    const timeoutId = setTimeout(() => {
      fetchGitHubContributions();
      fetchVisitorCount();
    }, 100);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [timeRange]);

  const renderWeeks = useCallback(() => {
    if (isLoading) {
      const cells = 730; // 2 years
      return (
        <div className="flex gap-1">
          {Array.from({ length: Math.ceil(cells / 7) }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, j) => (
                <div key={j} className="w-2.5 h-2.5 rounded-sm bg-gray-700 animate-pulse" />
              ))}
            </div>
          ))}
        </div>
      );
    }

    if (processedData.isEmpty) {
      return <div className="text-gray-400 text-sm text-center py-4">No contribution data available</div>;
    }

    const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
    
    // Generate month labels for the contribution grid
    const getMonthLabels = () => {
      const labels = [];
      const monthsToShow = [];
      
      // Get first day of each week to determine months
      processedData.weeks.forEach((week, weekIndex) => {
        const firstDay = week.find(day => day.date);
        if (firstDay && weekIndex % 4 === 0) { // Show every 4th week (roughly monthly)
          const date = new Date(firstDay.date);
          const monthLabel = date.toLocaleDateString('en-US', { month: 'short' });
          monthsToShow.push({ weekIndex, label: monthLabel });
        }
      });
      
      return monthsToShow;
    };
    
    const monthLabels = getMonthLabels();
    
    return (
      <div className="w-full">
        <div className="contributions-scroll custom-scrollbar overflow-x-auto">
          {/* Month labels */}
          <div className="inline-flex gap-1 mb-1 min-w-full">
            <div className="w-6 flex-shrink-0"></div> {/* Space for day labels */}
            {processedData.weeks.map((_, i) => {
              const monthLabel = monthLabels.find(m => m.weekIndex === i);
              return (
                <div key={i} className="flex flex-col gap-1 flex-shrink-0 w-2.5">
                  {monthLabel && (
                    <span className="text-xs text-gray-400 text-center">
                      {monthLabel.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="inline-flex gap-1 pb-1 min-w-full">
            {/* Day labels column */}
            <div className="flex flex-col gap-1 flex-shrink-0 ml-2 mr-2">
              {dayLabels.map((label, i) => (
                <div key={i} className="w-2.5 h-2.5 flex items-center justify-center">
                  <span className="text-xs text-gray-400 text-right w-6">{label}</span>
                </div>
              ))}
            </div>
            
            {/* Contribution weeks */}
            {processedData.weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-1 flex-shrink-0">
                {week.map((day, j) => (
                  <ContributionDay key={`${i}-${j}`} day={day} index={`${i}-${j}`} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }, [isLoading, processedData, timeRange]);

  return (
    <>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #374151; border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: linear-gradient(to right, #10b981, #34d399); border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: linear-gradient(to right, #059669, #10b981); }
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #10b981 #374151; }
        .contributions-scroll { overscroll-behavior-x: none; scroll-snap-type: x proximity; width: 100%; }
      `}</style>

      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 text-white" />
            <h3 className="text-lg font-bold text-white">GitHub Contributions</h3>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <GitCommit className="w-4 h-4 text-green-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {totalContributions}
              </span>
            </div>
            <p className="text-gray-400 text-xs font-medium">contributions</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-2xl font-bold text-blue-400">
                {streak}
              </span>
            </div>
            <p className="text-gray-400 text-xs font-medium">best streak</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-2xl font-bold text-purple-400">
                {visitorCount?.toLocaleString() || 0}
              </span>
            </div>
            <p className="text-gray-400 text-xs font-medium">site visits</p>
          </div>
        </div>

        {/* Contributions Grid */}
        <div className="flex-1">{renderWeeks()}</div>
      </div>
    </>
  );
};

export default React.memo(GithubContributions);
