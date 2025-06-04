import { useState, useEffect } from 'react';
import '../styles/hotspots.css';

const hotspots = [

    {
        id: 1,
        top: '42.5%',
        left: '20%',
        title: 'Reliable High-Performance Powerplant',
        desc: 'Powered by a robust turboprop engine, the A-30 Condor delivers consistent high-output thrust, optimized for rapid deployment and sustained mission endurance in austere environments.',
    },

    {
        id: 2,
        top: '56%',
        left: '31%',
        title: 'Sensor Fusion',
        desc: 'The Condor integrates EO/IR and SIGINT payloads into a unified mission system, enabling operators to achieve superior situational awareness and real-time threat assessment.',
    },

    {
        id: 3,
        top: '42.5%',
        left: '42.5%',
        title: 'Modular Avionics Suite',
        desc: 'A reconfigurable avionics architecture supports rapid tech insertion and customization, reducing integration time while allowing for mission-specific upgrades on demand.',
    },

    {
        id: 4,
        top: '72.5%',
        left: '25%',
        title: 'Versatile Payload Options',
        desc: 'Designed with multi-role capability in mind, the A-30 can be equipped with precision-guided munitions, ISR sensors, or auxiliary fuel—adapting to strike, support, or recon roles.',
    },

    {
        id: 5,
        top: '60%',
        left: '50%',
        title: 'Superior Takeoff and Landing Performance',
        desc: 'With a high-lift wing design and rugged gear, the Condor excels in short and unprepared runway operations—ideal for forward operating bases and expeditionary missions.',
    },

];

export default function Hotspots() {
    const [selected, setSelected] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const selectedHotspot = hotspots.find(h => h.id === selected);

    return (
        <div className="hotspot-container">

            <img
                src={`${import.meta.env.BASE_URL}assets/images/FireMissileRender.png`}
                alt="A-30 Condor Side View"
                className="hotspot-image"
            />

            {hotspots.map(h => {
                const isSelected = selected === h.id;
                const isAnotherSelected = selected !== null && !isSelected;

                return (
                    <div
                        key={h.id}
                        className={`hotspot-circle ${isSelected ? 'open' : ''} ${isAnotherSelected ? 'fade-out' : 'fade-in'}`}
                        style={{ top: h.top, left: h.left }}
                        onClick={() => setSelected(h.id)}
                    />
                );
            })}

            {selectedHotspot && (
                <>
                    {/* Fullscreen background only for mobile to allow tap-to-close */}
                    {isMobile && (
                        <div className="hotspot-mobile-backdrop" onClick={() => setSelected(null)} />
                    )}

                    <div
                        className={`hotspot-modal ${isMobile ? 'mobile' : 'desktop'}`}
                        style={
                            isMobile
                                ? {}
                                : {
                                    top: selectedHotspot.top,
                                    left: selectedHotspot.left,
                                }
                        }
                    >
                        <div className="hotspot-modal-inner fade-in-text">
                            <h3>{selectedHotspot.title}</h3>
                            <hr />
                            <p>{selectedHotspot.desc}</p>
                        </div>
                    </div>

                    {!isMobile && (
                        <button
                            className="hotspot-close-float"
                            style={{
                                top: `calc(${selectedHotspot.top} - 5px)`,
                                left: `calc(${selectedHotspot.left} - 5px)`,
                            }}
                            onClick={() => setSelected(null)}
                        >
                            ✕
                        </button>
                    )}
                </>
            )}
        </div>
    );
}





