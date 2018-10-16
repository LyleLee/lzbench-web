# lzbench compression benchmark web site

This is the web site to present results for the lzbench compression benchmark.

For local development, you can clone the repo and start a local web server with `python -m http.server`.
It has to be accessed through a real web server for the javascript to work, try `http://127.0.0.1:8000` or `http://localhost:8000`, whichever is accepted by your browser.

This was forked from the ``squash`` compression benchmark. An utility to use multiple compression algorithms and run benchmarks, like `lzbench` except it appears abandonned and I couldn't get it work. The visualizations are **fantastic** hence forking them.

To run: lzbench: `./lzbench -ezstd -o4 -i5,5 -t0,0 -p3 silesia/* > ./results.csv`. The CSV results can be adjusted and reformatted manually with Excel to the input format.

* `o4` CSV output
* `i5,5` runs per algorithm
* `t1,1` minimum duration per run
* `p3` save the median run

Note that forcing multiple runs (`i5,5`) will take a very long time for the slowest algorithms (lzma/xz). 

Note that forcing a minimum duration (`t1,1`) will take much longer for the fast algorithms with a hundred different compression levels to try (lz4/lizard).
