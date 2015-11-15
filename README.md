# Rust with Node.js
Rust is a language that focuses on speed, safety and concurrency. So does it make sense to use Rust from Node.js? The main.js calculates Fibonacci numbers using both Rust and pure JavaScript.

# Performance Results

| n  | Rust (ms) | JavaScript (ms) |
|----|-----------|-----------------|
| 1  | 179.634   | 0.450           |
| 5  | 179.643   | 0.391           |
| 10 | 184.332   | 0.510           |
| 20 | 183.131   | 0.756           |
| 30 | 180.576   | 8.953           |
| 35 | 208.610   | 87.353          |
| 40 | 403.280   | 951.201         |
| 44 | 1718.847  | 6532.668        |
| 46 | 4147.662  | 17084.859       |

#Install & Run
1. Install Node.js and Rust (https://doc.rust-lang.org/stable/book/installing-rust.html)
2. `npm install`
3. Run `node main.js`
