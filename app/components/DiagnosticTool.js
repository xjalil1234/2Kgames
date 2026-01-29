"use client";
import { useState } from 'react';
import styles from './DiagnosticTool.module.css';

const CONSOLES = [
    { id: 'ps4', name: 'PlayStation 4', img: 'PS4' },
    { id: 'ps5', name: 'PlayStation 5', img: 'PS5' },
    { id: 'xbox_one', name: 'Xbox One', img: 'XB1' },
    { id: 'xbox_sx', name: 'Xbox Series X', img: 'XSX' },
];

const ISSUES = {
    ps4: [
        { id: 'power', name: 'Does not turn on', causes: [{ cause: 'Power Supply', prob: 70, cost: 5000 }, { cause: 'Motherboard', prob: 30, cost: 8000 }] },
        { id: 'fan', name: 'Loud fan / Noise', causes: [{ cause: 'Fan Replacement', prob: 80, cost: 3000 }, { cause: 'Deep Cleaning', prob: 20, cost: 2000 }] },
        { id: 'hdmi', name: 'HDMI / No Signal', causes: [{ cause: 'HDMI Port', prob: 90, cost: 40 }, { cause: 'IC Chip', prob: 10, cost: 60 }] },
        { id: 'disc', name: 'Disc not reading', causes: [{ cause: 'Laser Lens', prob: 60, cost: 3500 }, { cause: 'Drive Mechanism', prob: 40, cost: 4500 }] },
    ],
    ps5: [
        { id: 'power', name: 'Does not turn on', causes: [{ cause: 'Power Supply', prob: 60, cost: 8000 }, { cause: 'Main Board', prob: 40, cost: 12000 }] },
        { id: 'hdmi', name: 'HDMI Port Broken', causes: [{ cause: 'HDMI Port Replacement', prob: 100, cost: 7000 }] },
        { id: 'drift', name: 'Stick Drift (Controller)', causes: [{ cause: 'Stick Replacement', prob: 100, cost: 2500 }] },
    ],
    xbox_one: [
        { id: 'power', name: 'Does not turn on', causes: [{ cause: 'Power Brick', prob: 80, cost: 3000 }] },
        { id: 'drive', name: 'Disc Drive Issue', causes: [{ cause: 'Drive Replacement', prob: 100, cost: 5000 }] },
    ],
    xbox_sx: [
        { id: 'power', name: 'No Power', causes: [{ cause: 'Internal PSU', prob: 90, cost: 9000 }] },
        { id: 'hdmi', name: 'Display Issue', causes: [{ cause: 'HDMI Port', prob: 100, cost: 8000 }] },
    ],
};

export default function DiagnosticTool() {
    const [step, setStep] = useState(1);
    const [selectedConsole, setSelectedConsole] = useState(null);
    const [selectedIssues, setSelectedIssues] = useState([]); // Array of issue objects

    const handleConsoleSelect = (consoleId) => {
        setSelectedConsole(consoleId);
        setSelectedIssues([]);
        setStep(2);
    };

    const toggleIssue = (issue) => {
        if (selectedIssues.find(i => i.id === issue.id)) {
            setSelectedIssues(selectedIssues.filter(i => i.id !== issue.id));
        } else {
            setSelectedIssues([...selectedIssues, issue]);
        }
    };

    const handleCalculate = () => {
        if (selectedIssues.length > 0) {
            setStep(3);
        }
    };

    const reset = () => {
        setStep(1);
        setSelectedConsole(null);
        setSelectedIssues([]);
    };

    // Safe accessor if issues list is missing
    const currentIssuesList = ISSUES[selectedConsole] || [];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Console <span className="text-gradient">Diagnostic</span> Center</h2>
                <p className={styles.subtitle}>Identify the problem and get an instant repair estimate.</p>
            </div>

            <div className={styles.wizard}>
                <div className={styles.progress}>
                    <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>
                        <span className={styles.stepNum}>1</span> Console
                    </div>
                    <div className={styles.line}></div>
                    <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>
                        <span className={styles.stepNum}>2</span> Issue
                    </div>
                    <div className={styles.line}></div>
                    <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>
                        <span className={styles.stepNum}>3</span> Estimate
                    </div>
                </div>

                <div className={styles.content}>
                    {step === 1 && (
                        <div className={styles.grid}>
                            {CONSOLES.map((c) => (
                                <button key={c.id} className={styles.card} onClick={() => handleConsoleSelect(c.id)}>
                                    <div className={styles.icon}>{c.img}</div>
                                    <div className={styles.name}>{c.name}</div>
                                </button>
                            ))}
                        </div>
                    )}

                    {step === 2 && (
                        <div className={styles.issueList}>
                            <h3 className={styles.stepTitle}>What seems to be the problem? <br /><span className={styles.smallNote}>(Select all that apply)</span></h3>

                            <div className={styles.issuesGrid}>
                                {currentIssuesList.length > 0 ? currentIssuesList.map((issue) => {
                                    const isSelected = selectedIssues.find(i => i.id === issue.id);
                                    return (
                                        <button
                                            key={issue.id}
                                            className={`${styles.option} ${isSelected ? styles.selectedOption : ''}`}
                                            onClick={() => toggleIssue(issue)}
                                        >
                                            <div className={styles.checkbox}>{isSelected ? '✔' : ''}</div>
                                            {issue.name}
                                        </button>
                                    );
                                }) : <p>No specific issues listed. Please contact us.</p>}
                            </div>

                            <div className={styles.actions}>
                                <button className={styles.backBtn} onClick={() => setStep(1)}>← Back</button>
                                <button
                                    className="btn-primary"
                                    disabled={selectedIssues.length === 0}
                                    onClick={handleCalculate}
                                    style={{ opacity: selectedIssues.length === 0 ? 0.5 : 1 }}
                                >
                                    Calculate Estimate
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && selectedIssues.length > 0 && (
                        <div className={styles.result}>
                            <h3 className={styles.stepTitle}>Diagnostic Analysis</h3>

                            <div className={styles.resultCard}>
                                <div className={styles.analysis}>
                                    {selectedIssues.map((issue, i) => {
                                        const minPrice = Math.min(...issue.causes.map(c => c.cost));
                                        return (
                                            <div key={i} className={styles.issueBlock}>
                                                <div className={styles.issueHeader}>
                                                    <h4 className={styles.issueName}>{issue.name}</h4>
                                                    <span className={styles.issuePrice}>{minPrice} DA</span>
                                                </div>
                                                {issue.causes.map((cause, idx) => (
                                                    <div key={idx} className={styles.causeRow}>
                                                        <span>{cause.cause}</span>
                                                        <div className={styles.barContainer}>
                                                            <div className={styles.bar} style={{ width: `${cause.prob}%` }}></div>
                                                        </div>
                                                        <span className={styles.perc}>{cause.prob}%</span>
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className={styles.estimate}>
                                    <h4>Total Estimated Cost</h4>
                                    {/* Simple logic: Sum of minimum costs of all selected issues */}
                                    <div className={styles.priceTag}>
                                        {selectedIssues.reduce((acc, issue) => acc + Math.min(...issue.causes.map(c => c.cost)), 0)} DA
                                    </div>
                                    <p className={styles.disclaimer}>*Estimates are preliminary. Valid after inspection.</p>
                                    <a href="#contact" className="btn-primary">Book Repair Now</a>
                                </div>
                            </div>

                            <button className={styles.backBtn} onClick={reset}>Start Over</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
