import { StatCard } from '@/components/rpg/StatCard';
import { Dumbbell, BookOpen, User, Brain, Zap, Scroll, Map as MapIcon, Home as HomeIcon } from 'lucide-react';

export default function Home() {
  const stats = [
    { id: '1', name: 'STR', level: 12, xp: 450, xpNext: 1000, icon: Dumbbell, color: 'var(--color-str)' },
    { id: '2', name: 'INT', level: 8, xp: 820, xpNext: 900, icon: BookOpen, color: 'var(--color-int)' },
    { id: '3', name: 'CHA', level: 5, xp: 120, xpNext: 600, icon: User, color: 'var(--color-cha)' },
    { id: '4', name: 'WIL', level: 15, xp: 200, xpNext: 2000, icon: Brain, color: 'var(--color-wil)' },
    { id: '5', name: 'NRG', level: 20, xp: 1950, xpNext: 2500, icon: Zap, color: 'var(--color-xp)' },
  ];

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      
      {/* Navigation / HUD Top Bar */}
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
        <button className="panel-wood" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer' }}>
            <HomeIcon size={18} /> Village
        </button>
        <button className="panel-paper" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer', background: '#ffe0b2' }}>
            <MapIcon size={18} /> World Map
        </button>
      </nav>

      {/* Hero Section / Profile Header */}
      <header className="panel-wood" style={{ 
          marginBottom: '2rem', 
          display: 'flex', 
          flexDirection: 'column',
          gap: '1rem',
          borderRadius: '8px',
          boxShadow: '0 8px 0 rgba(0,0,0,0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                {/* Avatar Frame */}
                <div style={{ 
                    width: 72, 
                    height: 72, 
                    background: '#5d4037', 
                    border: '4px solid #bcaaa4',
                    borderRadius: '8px',
                    display: 'grid', 
                    placeItems: 'center' 
                }}>
                    <User size={36} color="#fff8e1" />
                </div>
                <div>
                    <h1 style={{ fontSize: '1.75rem', textShadow: '2px 2px 0 #3e2723', marginBottom: '0.25rem' }}>PLAYER ONE</h1>
                    <span style={{ 
                        background: '#d95763', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '4px', 
                        fontSize: '0.875rem',
                        border: '2px solid rgba(0,0,0,0.2)'
                    }}>Novice Adventurer</span>
                </div>
            </div>
            
            <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffd700', textShadow: '2px 2px 0 #5d4037' }}>LVL 12</span>
            </div>
        </div>

        {/* Big XP Bar */}
        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem', color: '#fff8e1' }}>
                <span>EXPERIENCE</span>
                <span>1450 / 5000</span>
            </div>
            <div style={{ height: '1.25rem', background: '#3e2723', border: '2px solid #5d4037', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ 
                    width: '35%', 
                    height: '100%', 
                    background: 'linear-gradient(180deg, #ffd700 0%, #ffb300 100%)',
                    boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.4)'
                }}></div>
            </div>
        </div>
      </header>
      
      {/* Stats Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {stats.map(stat => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
          
      {/* "Quest Log" Section */}
      <section className="panel-paper" style={{ borderRadius: '2px', position: 'relative' }}>
        {/* Decorative 'tape' or visual anchor */}
        <div style={{ 
            position: 'absolute', top: '-10px', left: '50%',
            width: '120px', height: '20px', background: 'rgba(255,255,255,0.4)', transform: 'translateX(-50%) rotate(-2deg)'

        }}></div>

        <h2 style={{ 
            fontSize: '1.25rem', 
            marginBottom: '1rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            borderBottom: '2px solid #d7ccc8',
            paddingBottom: '0.5rem'
        }}>
            <Scroll size={20} /> Adventure Log
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ 
                padding: '0.75rem', 
                background: '#fff8e1', 
                border: '1px solid #d7ccc8',
                borderRadius: '4px',
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: 'center'
            }}>
                <div className="flex items-center gap-3">
                    <span style={{ color: 'var(--color-str)', background: '#ffebee', padding: '4px', borderRadius: '4px' }}><Dumbbell size={16}/></span>
                    <span style={{ fontWeight: 600 }}>Training at the Barracks (Gym)</span>
                </div>
                <span className="text-xp">+150 XP</span>
            </div>

            <div style={{ 
                padding: '0.75rem', 
                background: '#fff8e1', 
                border: '1px solid #d7ccc8',
                borderRadius: '4px',
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: 'center'
            }}>
                 <div className="flex items-center gap-3">
                    <span style={{ color: 'var(--color-int)', background: '#e3f2fd', padding: '4px', borderRadius: '4px' }}><BookOpen size={16}/></span>
                    <span style={{ fontWeight: 600 }}>Studied Ancient Tomes (Reading)</span>
                </div>
                <span className="text-xp">+50 XP</span>
            </div>
        </div>
        
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <button className="pixel-btn" style={{ background: '#8d6e63', fontSize: '0.8rem' }}>View All Logs</button>
        </div>
      </section>
    </div>
  );
}
