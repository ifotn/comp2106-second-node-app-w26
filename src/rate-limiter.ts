function createRateLimiter(max: number): () => void {
    let attempts: number = 0;

    function makeAttempt(): void {
        if (attempts >= max) {
            console.log('Too bad.  You are at the max # of attempts.');
            return;  // at limit so stop everything
        }
        attempts++; // increment # of attempts
        console.log(`Attempt # ${attempts}`);
    }

    return makeAttempt;
}

// instantiate limiter 
const limiter = createRateLimiter(3);
limiter();
limiter();
limiter();
limiter();
limiter();