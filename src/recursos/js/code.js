(function(doc, win, onclick, getElementById, className, innerHTML, confirm) {
    var
        a, b, c, colorLabel, cid, players, current, finished, newgameLabel, wonLabel, laststart = 1,
        cellAt = function(i, j) {
            return doc["getElementById"](cid + i + j);
        },
        isCurrentColor = function(i, j) {
            return cellAt(i, j)["className"] === players[current];
        },
        start = function() {
            current = laststart = (laststart + 1) % 2;
            finished = 0;
            colorLabel["innerHTML"] = colorLabel["className"] = players[current = (current + 1) % 2];
            for (a = 1; a < 7; a++)
                for (b = 1; b < 8; b++)
                    cellAt(a, b)["className"] = '';
        },
        makeMove = function(i, j, s) {
            s > 0 && (cellAt(s, j)["className"] = '');
            cellAt(s + 1, j)["className"] = players[current];
            // s === i - 1 ? function(i, j) {
            //         return function(i, j) {
            //             for (a = j - 1; 0 < a && isCurrentColor(i, a); a--) {}
            //             for (b = j + 1; 8 > b && isCurrentColor(i, b); b++) {}
            //             return 4 < b - a;
            //         }(i, j) || function(i, j) {
            //             for (c = i + 1; 7 > c && isCurrentColor(c, j); c++) {}
            //             return 3 < c - i;
            //         }(i, j) || function(i, j) {
            //             for (a = i - 1, b = j - 1; 0 < a && !(1 > b) && isCurrentColor(a, b); a--)
            //                 b--;
            //             for (c = i + 1, b = j + 1; 7 > c && !(7 < b) && isCurrentColor(c, b); c++)
            //                 b++;
            //             return 4 < c - a
            //         }(i, j) || function(i, j) {
            //             for (a = i - 1, b = j + 1; 0 < a && !(7 < b) && isCurrentColor(a, b); a--)
            //                 b++;
            //             for (c = i + 1, b = j - 1; 7 > c && !(1 > b) && isCurrentColor(c, b); c++)
            //                 b--;
            //             return 4 < c - a;
            //         }(i, j);
            //     }(i, j) ?
            //     finished = 1 && win["confirm"](doc["getElementById"](wonLabel)["innerHTML"].replace("%s", players[current].toLowerCase())) && start() :
            //     colorLabel["innerHTML"] = colorLabel["className"] = players[current = (current + 1) % 2] :
            //     setTimeout(function() {
            //         makeMove(i, j, s + 1)
            //     }, 20);

        };

    return function(n, w, c, h, p1, p2) {
        cid = "color";
        newgameLabel = "newgame";
        wonLabel = "gano";
        colorLabel = doc["getElementById"]("color");
        players = ["Rojo", "Amarillo"];
        for (a = 1; a < 7; a++) //row a
            for (b = 1; b < 8; b++) // col b
                cellAt(a, b)["onclick"] = function(b, a) {
                return function() {
                    if (!finished)
                        for (a = 6; a > 0; a--)
                            if (!cellAt(a, b)["className"]) {
                                makeMove(a, b, 0);
                                break;
                            }
                };
            }(b);;
        doc["getElementById"]("restart")["onclick"] = function() {
            win["confirm"](doc["getElementById"](newgameLabel)["innerHTML"]) && start()
        };
        start();
    };
})(document, window, "onclick", "getElementById", "className", "innerHTML", "confirm")("newgame", "won", "color", "restart", "p1", "p2");