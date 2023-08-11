class ArenaService {

    start() {

    }

    finish(nickname, points) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ id: 540, position: 8 });
            }, "500");
        });
    }

    multiply(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ id: 555, bonus: 4, totalScore: 1500, position: 4 });
            }, "500");
        });
    }

    getScoredboard() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{ position: 1, nickname: "Juancito", points:"500"},{ position: 2, nickname: "HolaMinaXD", points:"350" },{ position: 3, nickname: "Wosito33", points:"300" }]);
            }, "500");
        });
    }

}

export default new ArenaService();