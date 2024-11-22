function RandomAttack() {
    if (randomAttackRoll === 1) {
        engine.state.set('randomAttack', 'Script Kiddie');
        engine.state.set('actionDifficulty', 3);
        engine.state.set('actionType', 'Hacking');
    } else if (randomAttackRoll === 2) {
        engine.state.set('randomAttack', 'Biometric Spoofing');
        engine.state.set('actionDifficulty', 5);
        engine.state.set('actionType', 'Infiltration');
    } else if (randomAttackRoll === 3) {
        engine.state.set('randomAttack', 'Phishing Email');
        engine.state.set('actionDifficulty', 2);
        engine.state.set('actionType', 'Hacking');
    } else if (randomAttackRoll === 4) {
        engine.state.set('randomAttack', 'Picking Locks');
        engine.state.set('actionDifficulty', 3);
        engine.state.set('actionType', 'Infiltration');
    } else if (randomAttackRoll === 5) {
        engine.state.set('randomAttack', 'Social Engineering');
        engine.state.set('actionDifficulty', 3);
        engine.state.set('actionType', 'Social');
    } else if (randomAttackRoll === 6) {
        engine.state.set('randomAttack', 'DDOS Attack');
        engine.state.set('actionDifficulty', 2);
        engine.state.set('actionType', 'Hacking');
    }
}