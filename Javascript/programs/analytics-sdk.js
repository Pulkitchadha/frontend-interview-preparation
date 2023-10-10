class SDK {
    eventQueue = [];
    count = 1;

    logEvent(event) {
        this.eventQueue.push(event);
    }

    async send() {
        if (!this.eventQueue.length) return;

        const event = this.eventQueue.shift();

        try {
            await this.delay(event);
            console.log("Success", event);
            this.count++;
        } catch (err) {
            console.log("Event Failed:", event);
            console.log("Retry:", event);
            this.eventQueue.unshift(event);
            this.count = 1;
        } finally {
            this.send();
        }
    }

    delay(event) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.count % 5 === 0) reject();
                else resolve(event);
            }, 1000);
        });
    }
}

const sdk = new SDK();
console.log("------------- Add Events-------------");
sdk.logEvent("1");
sdk.logEvent("2");
sdk.logEvent("3");
sdk.logEvent("4");
sdk.logEvent("5");
sdk.logEvent("6");
sdk.logEvent("7");
sdk.logEvent("8");
sdk.logEvent("9");
sdk.logEvent("10");
sdk.logEvent("11");
sdk.logEvent("12");

console.log("------------- Send Events-------------");
sdk.send();
