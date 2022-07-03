class Typewriter {
  queue = [];
  typeSpeed = 50;
  id = "";

  typeString(str, delay = this.typeSpeed) {
    this.queue.push(() => {
      return new Promise((resolve, reject) => {
        const element = document.getElementById("typed");
        let i = 0;
        const interval = setInterval(() => {
          if (!element) {
            reject();
          }
          element.append(str[i]);
          i++;
          if (i >= str.length) {
            clearInterval(interval);
            resolve();
          }
        }, delay);
      });
    });
    return this;
  }
  deleteChars(count, delay = this.typeSpeed) {
    this.queue.push(() => {
      return new Promise((resolve, reject) => {
        const element = document.getElementById(this.id);
        let i = 0;
        const interval = setInterval(() => {
          if (!element) {
            reject();
          }
          element.innerText = element.innerText.substring(
            0,
            element.innerText.length - 1
          );
          i++;
          if (i >= count) {
            clearInterval(interval);
            resolve();
          }
        }, delay);
      });
    });
    return this;
  }
  deleteAll(delay = this.typeSpeed) {
    this.queue.push(() => {
      return new Promise((resolve, reject) => {
        const element = document.getElementById(this.id);
        let i = 0;
        if (!element) {
          reject();
        }
        const count = element.innerText.length;
        const interval = setInterval(() => {
          element.innerText = element.innerText.substring(
            0,
            element.innerText.length - 1
          );
          i++;
          if (i >= count) {
            clearInterval(interval);
            resolve();
          }
        }, delay);
      });
    });
    return this;
  }
  pauseFor(ms) {
    this.queue.push(() => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    });
    return this;
  }
  async start(id, loop = false) {
    this.id = id;
    for (const cb of this.queue) {
      await cb();
      if (loop) {
        this.queue.push(cb);
      }
    }
    return this;
  }

  stop() {
    this.queue = [];
  }
}

export default Typewriter;
