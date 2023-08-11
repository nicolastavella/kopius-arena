class ArenaService {

    start() {

    }

    finish(nickname, points) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ id: 540 });
            }, "500");
        });
    }

    multiply(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ id: 555, bonus: 4, totalScore: 1500, position: 5 });
            }, "500");
        });
    }

    getScoredboard() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{ position: 1, nickname: "Juancito" },{ position: 2, nickname: "HolaMinaXD" },{ position: 3, nickname: "Wosito33" }]);
            }, "500");
        });
    }

}

export default new ArenaService();