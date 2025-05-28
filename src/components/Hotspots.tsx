import { useState, useEffect } from 'react';
import '../styles/hotspots.css';

const hotspots = [
    {
        id: 1,
        top: '55%',
        left: '38%',
        title: 'Modular Subsystems',
        desc: 'Designed to avoid over-engineering by leveraging modular subsystems interoperable with commercial off-the-shelf hardware.',
    },
    {
        id: 2,
        top: '45%',
        left: '32%',
        title: 'Sensor Fusion',
        desc: 'Integrated EO/IR, radar, and SIGINT sensors feed a central mission computer.',
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
                src={`${import.meta.env.BASE_URL}assets/images/GrayDecaled1.png`}
                alt="A-30 Condor Side View"
                className="hotspot-image"
            />

            {hotspots.map(h => (
                <div
                    key={h.id}
                    className="hotspot-circle"
                    style={{ top: h.top, left: h.left }}
                    onClick={() => setSelected(h.id)}
                />
            ))}

            {selectedHotspot && (
                <>
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
                                top: `calc(${selectedHotspot.top} - 20px)`,
                                left: `calc(${selectedHotspot.left} - 20px)`,
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




