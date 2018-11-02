(function() {
    function decimalAdjust(type, value, exp) {
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    if (!Math.round10) {
        Math.round10 = function(value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
    if (!Math.floor10) {
        Math.floor10 = function(value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }
    if (!Math.ceil10) {
        Math.ceil10 = function(value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(fn, scope) {
            'use strict';
            var i, len;
            for (i = 0, len = this.length; i < len; ++i) {
                if (i in this) {
                    fn.call(scope, this[i], i, this);
                }
            }
        };
    }
})();

$(function() {
    $('.failure-popover').popover({
        html: true,
        content: function() {
            var contents = '';
            var failures = jQuery.parseJSON($(this).attr('data-failures'));
            failures.forEach(function(e, i, a) {
                var issue;
                if (e.issue == 'OOM')
                    issue = '<abbr title="Out Of Memory">OOM</abbr>';
                else
                    issue = '<a href="' + e.issue + '"><i class="fa fa-bug"></i></a>';

                contents +=
                    '<tr>' +
                    '<td>' + e.plugin + '</td>' +
                    '<td>' + e.codec + '</td>' +
                    '<td>' + e.dataset + '</td>' +
                    '<td style="text-align: center">' + issue + '</td>' +
                    '</tr>';
            });
            return $("<table class='table table-striped'><thead><th>Plugin</th><th>Codec</th><th>Dataset</th><th>Issue</th></thead><tbody>" + contents + "</tdody></table>");
        }
    });
})

var datasets = [{
        id: 'canterbury/alice29.txt',
        source: 'Canterbury Corpus',
        sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
        description: 'English text',
        size: 152089
    },
    {
        id: 'canterbury/asyoulik.txt',
        source: 'Canterbury Corpus',
        sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
        description: 'Shakespeare',
        size: 125179
    },
    {
        id: 'canterbury/cp.html',
        source: 'Canterbury Corpus',
        sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
        description: 'HTML source',
        size: 24603
    },
    {
        id: 'silesia/dickens',
        source: 'Silesia Corpus',
        sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
        description: 'Collected works of Charles Dickens',
        size: 10192446
    },
    {
        id: 'canterbury/fields.c',
        source: 'Canterbury Corpus',
        sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
        description: 'C source',
        size: 11150
    },
    {
        id: 'canterbury/grammar.lsp',
        source: 'Canterbury Corpus',
        sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
        description: 'LISP source',
        size: 3721
    },
    {
        id: 'canterbury/kennedy.xls',
        source: 'Canterbury Corpus',
        sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
        description: 'Excel Spreadsheet',
        size: 1029744
    },
    {
        id: 'canterbury/lcet10.txt',
        source: 'Canterbury Corpus',
        sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
        description: 'Technical writing',
        size: 426754
    },
    {
        id: 'silesia/mozilla',
        source: 'Silesia Corpus',
        sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
        description: 'Tarred executables of Mozilla 1.0 (Tru64 UNIX edition)',
        size: 51220480
    },
    {
        id: 'silesia/mr',
        source: 'Silesia Corpus',
        sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
        description: 'Medical magnetic resonanse image',
        size: 9970564
    },
    {
        id: 'silesia/nci',
        source: 'Silesia Corpus',
        sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
        description: 'Chemical database of structures',
        size: 33553445
    },
    {
        id: 'silesia/ooffice',
        source: 'Silesia Corpus',
        sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
        description: 'A dll from Open Office.org 1.01',
        size: 6152192
    },
    {
        id: 'silesia/osdb',
        source: 'Silesia Corpus',
        sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
        description: 'Sample database in MySQL format from Open Source Database Benchmark',
        size: 10085684
    },
    {
        id: 'canterbury/plrabn12.txt',
        source: 'Canterbury Corpus',
        sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
        description: 'Poetry',
        size: 481861
    },
    {
        id: 'canterbury/ptt5',
        source: 'Canterbury Corpus',
        sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
        description: 'CCITT test set',
        size: 513216
    },
    {
        id: 'silesia/reymont',
        source: 'Silesia Corpus',
        sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
        description: 'Text of the book Chłopi by Władysław Reymont',
        size: 6627202
    },
    {
        id: 'silesia/samba',
        source: 'Silesia Corpus',
        sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
        description: 'Tarred source code of Samba 2-2.3 ',
        size: 21606400
    },
    {
        id: 'silesia/sao',
        source: 'Silesia Corpus',
        sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
        description: 'The SAO star catalog',
        size: 7251944
    },
    {
        id: 'canterbury/sum',
        source: 'Canterbury Corpus',
        sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
        description: 'SPARC Executable',
        size: 38240
    },
    {
        id: 'canterbury/xargs.1',
        source: 'Canterbury Corpus',
        sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
        description: 'GNU manual page',
        size: 4227
    },
    {
        id: 'silesia/webster',
        source: 'Silesia Corpus',
        sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
        description: 'The 1913 Webster Unabridged Dictionary',
        size: 41458703
    },
    {
        id: 'silesia/xml',
        source: 'Silesia Corpus',
        sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
        description: 'Collected XML files',
        size: 5345280
    },
    {
        id: 'silesia/x-ray',
        source: 'Silesia Corpus',
        sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
        description: 'X-ray medical picture',
        size: 8474240
    },
    {
        id: 'protein/haemophilus_influenzae.txt',
        source: 'Protein',
        sourceUrl: 'http://www.data-compression.info/Corpora/ProteinCorpus/index.html#ProteinCorpus',
        description: 'The first genome to be fully sequenced and made available (1996), it is 1.83 megabases in size and contains approximately 1740 potential genes',
        size: 509519
    },
    {
        id: 'protein/methanococcus_jannaschii.txt',
        source: 'Protein',
        sourceUrl: 'http://www.data-compression.info/Corpora/ProteinCorpus/index.html#ProteinCorpus',
        description: 'Known as bayer yeast, the largest organism sequenced to date (1999)',
        size: 448779
    },
    {
        id: 'protein/saccharomyces_cerevisiae.txt',
        source: 'Protein',
        sourceUrl: 'http://www.data-compression.info/Corpora/ProteinCorpus/index.html#ProteinCorpus',
        description: 'An organism living in very hot undersea vents with a unique metabolism',
        size: 2900352
    },
    {
        id: 'artificial/a.txt',
        source: 'Artificial',
        sourceUrl: 'http://google.com',
        description: 'the letter a',
        size: 1
    },
    {
        id: 'artificial/a.txt',
        source: 'Artificial',
        sourceUrl: 'http://google.com',
        description: 'The letter a repeated 100 000 times',
        size: 100000
    },
    {
        id: 'artificial/aaa.txt',
        source: 'Artificial',
        sourceUrl: 'http://google.com',
        description: 'The alphabet (26 letters) repeated up to 100 000 characters',
        size: 100000
    },
    {
        id: 'artificial/random.txt',
        source: 'Artificial',
        sourceUrl: 'http://google.com',
        description: '100 000 random characters',
        size: 100000
    },
    {
        id: 'artificial/pi_1m.txt',
        source: 'Artificial',
        sourceUrl: 'http://google.com',
        description: 'The first million digits of PI in textual form: 14159265...',
        size: 1000000
    },
    {
        id: 'artificial/pi_1m.bin',
        source: 'Artificial',
        sourceUrl: 'http://google.com',
        description: 'The first million digits of PI encoded as a binary number',
        size: 415241
    },
];

var dataset_map = {};
datasets.forEach(function(e, i, a) {
    dataset_map[e.id] = e;
});

var machines = [{
    name: "desktop",
    cpu: "Intel® Core Processor i5-4590 - VmWare® VM",
    cpuUrl: "http://ark.intel.com/products/80815/",
    architecture: "x86_64",
    cores: 1,
    speed: 3300 * 1000000,
    memory: 1024 * 1,
    platform: "Desktop",
    platformUrl: "",
    distro: "Debian 9",
    kernel: "4.9.0",
    compiler: "gcc 6.3.0"
}, ];

var machine_map = {};
machines.forEach(function(e, i, a) {
    machine_map[e.name] = e;
});

var plugins = [
    //    { id: "lz4",
    //      name: "lz4",
    //      libraryUrl: "https://github.com/jibsen/brieflz",
    //      license: "MIT",
    //      revision: "bcaa6a1ee7ccf005512b5c23aa92b40cf75f9ed1",
    //      codecs: [ { name: "lz4" } ], },
];

var plugins_map = {};
plugins.forEach(function(e, i, a) {
    plugins_map[e.id] = e;
});

function formatSize(size, precision) {
    if (precision == undefined)
        precision = -2;

    if (size < 1024) {
        return size + " B";
    } else if (size < (1024 * 1024)) {
        return Math.round10(size / 1024, precision) + " KiB";
    } else if (size < (1024 * 1024 * 1024)) {
        return Math.round10(size / (1024 * 1024), precision) + " MiB";
    } else if (size < (1024 * 1024 * 1024 * 1024)) {
        return Math.round10(size / (1024 * 1024 * 1024), precision) + " GiB";
    } else {
        return Math.round10(size / (1024 * 1024 * 1024 * 1024), precision) + " TiB";
    }
}

function formatSpeed(speed, precision) {
    return formatSize(speed, precision) + "/s";
}

function formatFrequency(size, precision) {
    if (precision == undefined)
        precision = -2;

    if (size < 1000) {
        return size + " Hz";
    } else if (size < 1000000) {
        return Math.round10(size / 1000, precision) + " KHz";
    } else if (size < 1000000000) {
        return Math.round10(size / 1000000, precision) + " MHz";
    } else if (size < 1000000000000) {
        return Math.round10(size / 1000000000, precision) + " GHz";
    } else {
        return Math.round10(size / 1000000000000, precision) + " THz";
    }
}

function formatDuration(seconds) {
    var res = "";
    var w = false;

    function zeroPad(n, width, z) {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z || '0') + n;
    }

    [60 * 60 * 24, 60 * 60, 60, 1].forEach(function(d) {
        if ((seconds >= d) || w) {
            x = Math.floor(seconds / d);
            seconds -= d * x;
            res += (w ? ':' : '') + zeroPad(x, 2);
            w = true;
        }
    });

    if (res == '') {
        if (seconds == 0)
            return '0';

        var remaining = seconds;
        res = '0.';

        while (remaining < 0.1) {
            res += '0';
            remaining *= 10;
        }
        res += Math.round10(remaining * 1000);
    }

    return res;
}

var squashBenchmarkApp = angular.module("squashBenchmark", []);

squashBenchmarkApp.factory('squashBenchmarkData', function($q) {
    return function(machineId) {
        return $q(function(resolve, reject) {
            d3.csv("data/" + machineId + ".csv", function(data) {
                resolve(data.map(function(val) {
                    return {
                        dataset: val.dataset,
                        plugin: val.compressor_plugin,
                        codec: val.compressor_codec,
                        version: val.compressor_version,
                        level: val.compressor_flags,

                        input_size: parseInt(val.original_size),
                        compressed_size: parseInt(val.compressed_size),

                        compression_rate: parseFloat(val.compression_speed) * 1048576.0,
                        decompression_rate: parseFloat(val.decompression_speed) * 1048576.0,

                        compress_cpu: parseInt(val.original_size) / parseFloat(val.compression_speed) * 1048576.0,
                        decompress_cpu: parseInt(val.original_size) / parseFloat(val.decompression_speed) * 1048576.0,

                        ratio: parseFloat(val.compression_ratio),
                    };
                }));
            });
        });
    };
});

squashBenchmarkApp.filter('formatSpeed', function() {
    return function(input, precision) {
        return formatSpeed(input, precision);
    };
})

squashBenchmarkApp.filter('formatSize', function() {
    return function(input, precision) {
        return formatSize(input, precision);
    };
})

squashBenchmarkApp.filter('formatFrequency', function() {
    return function(input, precision) {
        return formatFrequency(input, precision);
    };
})

squashBenchmarkApp.filter('formatDuration', function() {
    return function(input) {
        return formatDuration(input);
    };
})

squashBenchmarkApp.controller("SquashBenchmarkCtrl", function($scope, squashBenchmarkData) {
    $scope.datasets = datasets;
    $scope.machines = machines;
    $scope.plugins = plugins;

    $scope.location = window.location.href.split("?")[0];

    $scope.query_string = function() {
        // http://stackoverflow.com/a/979995
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = pair[1];
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], pair[1]];
                query_string[pair[0]] = arr;
            } else {
                query_string[pair[0]].push(pair[1]);
            }
        }
        return query_string;
    }();

    $scope.random_dataset = true;
    if ($scope.query_string.dataset != undefined && dataset_map[$scope.query_string.dataset] != undefined) {
        $scope.dataset = $scope.query_string.dataset;
        $scope.random_dataset = false;
    } else {
        do {
            $scope.dataset = datasets[Math.floor(Math.random() * datasets.length)].id;
        } while ($scope.dataset == "fireworks.jpeg");
    }

    $scope.random_machine = true;
    if ($scope.query_string.machine != undefined && machine_map[$scope.query_string.machine] != undefined) {
        $scope.machine = $scope.query_string.machine;
        $scope.random_machine = false;
    } else {
        $scope.machine = machines[Math.floor(Math.random() * machines.length)].name;
    }

    $scope.datasetSort = 'id';
    $scope.machineSort = 'name';
    $scope.rawSort = 'plugin';

    $scope.data_points_per_machine = 0;
    $scope.codec_plugin_map = {};
    $scope.codecs = [];
    plugins.forEach(function(plugin, i, a) {
        plugin.codecs.forEach(function(codec, ci, ca) {
            $scope.codecs.push(codec);
            $scope.codec_plugin_map[plugin.id + ":" + codec.id];
            $scope.data_points_per_machine += (codec.levels == undefined) ? 1 : codec.levels.length;
        });
    });

    $scope.speedScale = "linear";
    if ($scope.query_string["speed-scale"] != undefined) {
        $scope.speedScale = ($scope.query_string["speed-scale"] == "logarithmic") ? "logarithmic" : "linear";
    }

    $scope.transferProcessVisible = 125;

    if ($scope.query_string.speed != undefined) {
        $scope.transferSpeedUnits = "KiB/s";
        var speed = parseInt($scope.query_string.speed);
        if (speed > 1024 && (speed % 256 == 0)) {
            speed /= 1024;
            $scope.transferSpeedUnits = "MiB/s";

            if (speed > 1024 && (speed % 256 == 0)) {
                speed /= 1024;
                $scope.transferSpeedUnits = "GiB/s";

                if (speed > 1024 && (speed % 256 == 0)) {
                    speed /= 1024;
                    $scope.transferSpeedUnits = "TiB/s";
                }
            }
        }
        $scope.transferSpeed = speed;
    } else {
        $scope.transferSpeedUnits = "MiB/s";
        $scope.transferSpeed = 125;
    }

    if ($scope.query_string["hidden-plugins"] != undefined) {
        var hidden_plugins = $scope.query_string["hidden-plugins"].toLowerCase().split(",");
        plugins.forEach(function(plugin) {
            plugin.visible = hidden_plugins.indexOf(plugin.id) == -1;
        });
    } else if ($scope.query_string["visible-plugins"] != undefined) {
        var visible_plugins = $scope.query_string["visible-plugins"].toLowerCase().split(",");
        plugins.forEach(function(plugin) {
            plugin.visible = visible_plugins.indexOf(plugin.id) != -1;
        });
    } else {
        plugins.forEach(function(plugin) {
            plugin.visible = true;
        });
    }

    $scope.$watchGroup(['transferSpeed', 'transferSpeedUnits'], function(newData, oldData, scope) {
        scope.calculatedTransferSpeed = scope.transferSpeed;

        switch (scope.transferSpeedUnits) {
            case "KiB/s":
                scope.calculatedTransferSpeed = scope.calculatedTransferSpeed * 1024;
                break;
            case "MiB/s":
                scope.calculatedTransferSpeed = scope.calculatedTransferSpeed * (1024 * 1024);
                break;
            case "GiB/s":
                scope.calculatedTransferSpeed = scope.calculatedTransferSpeed * (1024 * 1024 * 1024);
                break;
        }
    });

    $scope.transferProcessSort = "time";
    $scope.transferProcessDirection = "decompress";

    var colors = d3.scale.category20().range()
        .concat(d3.scale.category20b().range(),
            d3.scale.category20c().range());
    var chartData = [];

    function drawRatioCompressionChart(xAxis, yAxis) {
        if (xAxis == undefined)
            xAxis = $scope.speedScale;
        if (yAxis == undefined)
            yAxis = 'linear';

        var chart = $("#ratio-compression-chart").highcharts({
            chart: {
                type: 'scatter'
            },
            title: {
                text: null
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Compression Speed'
                },
                startOnTick: true,
                endOnTick: true,
                min: (xAxis == 'logarithmic') ? undefined : 0,
                labels: {
                    rotation: -45,
                    formatter: function() {
                        return formatSpeed(this.value);
                    }
                },
                type: xAxis
            },
            yAxis: {
                title: {
                    text: 'Ratio'
                },
                type: yAxis
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top'
            },
            plotOptions: {
                scatter: {
                    tooltip: {
                        headerFormat: '<b>{series.name}</b>',
                        pointFormatter: function() {
                            res = ":<b>" + this.codec + "</b><hr/><br/>";
                            if (this.level != "")
                                res += "Level: " + this.level + "<br/>";
                            res += "Ratio: " + Math.round10(this.y, -2) + "<br/>";
                            res += "Compression speed: " + formatSpeed(this.x) + "<br/>";
                            res += "Decompression speed: " + formatSpeed(this.z) + "<br/>";
                            return res;
                        }
                    }
                }
            },
            series: chartData.map(function(e, i, a) {
                return {
                    visible: (plugins_map[e.plugin] == undefined) ? true : plugins_map[e.plugin].visible,
                    name: e.plugin,
                    color: colors[i % colors.length],
                    data: e.values.map(function(p) {
                        return {
                            x: p.compression_rate,
                            y: p.ratio,
                            z: p.decompression_rate,
                            codec: p.codec,
                            level: p.level
                        };
                    })
                };
            })
        }).highcharts();

        $("#ratio-compression-chart .highcharts-xaxis-title").click(function(e) {
            drawRatioCompressionChart(chart.userOptions.xAxis.type == "linear" ? "logarithmic" : "linear",
                chart.userOptions.yAxis.type);
        });
        $("#ratio-compression-chart .highcharts-yaxis-title").click(function(e) {
            drawRatioCompressionChart(chart.userOptions.xAxis.type,
                chart.userOptions.yAxis.type == "linear" ? "logarithmic" : "linear");
        });
    }

    function drawRatioDecompressionChart(xAxis, yAxis) {
        if (xAxis == undefined)
            xAxis = $scope.speedScale;
        if (yAxis == undefined)
            yAxis = 'linear';

        var chart = $("#ratio-decompression-chart").highcharts({
            chart: {
                type: 'scatter'
            },
            title: {
                text: null
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Decompression Speed'
                },
                startOnTick: true,
                endOnTick: true,
                min: (xAxis == 'logarithmic') ? undefined : 0,
                labels: {
                    rotation: -45,
                    formatter: function() {
                        return formatSpeed(this.value);
                    }
                },
                type: xAxis
            },
            yAxis: {
                title: {
                    text: 'Ratio'
                },
                type: yAxis
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top'
            },
            plotOptions: {
                scatter: {
                    tooltip: {
                        headerFormat: '<b>{series.name}</b>',
                        pointFormatter: function() {
                            res = ":<b>" + this.codec + "</b><hr/><br/>";
                            if (this.level != "")
                                res += "Level: " + this.level + "<br/>";
                            res += "Ratio: " + Math.round10(this.y, -2) + "<br/>";
                            res += "Compression speed: " + formatSpeed(this.z) + "<br/>";
                            res += "Decompression speed: " + formatSpeed(this.x) + "<br/>";
                            return res;
                        }
                    }
                }
            },
            series: chartData.map(function(e, i, a) {
                return {
                    name: e.plugin,
                    visible: (plugins_map[e.plugin] == undefined) ? true : plugins_map[e.plugin].visible,
                    color: colors[i % colors.length],
                    data: e.values.map(function(p) {
                        return {
                            z: p.compression_rate,
                            y: p.ratio,
                            x: p.decompression_rate,
                            codec: p.codec,
                            level: p.level
                        };
                    })
                };
            })
        }).highcharts();

        $("#ratio-decompression-chart .highcharts-xaxis-title").click(function(e) {
            drawRatioDecompressionChart(chart.userOptions.xAxis.type == "linear" ? "logarithmic" : "linear",
                chart.userOptions.yAxis.type);
        });
        $("#ratio-decompression-chart .highcharts-yaxis-title").click(function(e) {
            drawRatioDecompressionChart(chart.userOptions.xAxis.type,
                chart.userOptions.yAxis.type == "linear" ? "logarithmic" : "linear");
        });
    }

    function drawCompressionDecompressionChart(xAxis, yAxis) {
        if (xAxis == undefined)
            xAxis = $scope.speedScale;
        if (yAxis == undefined)
            yAxis = $scope.speedScale;

        var chart = $("#compression-decompression-chart").highcharts({
            chart: {
                type: 'scatter'
            },
            title: {
                text: null
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Decompression Speed'
                },
                endOnTick: true,
                min: (xAxis == 'logarithmic') ? undefined : 0,
                labels: {
                    rotation: -45,
                    formatter: function() {
                        return formatSpeed(this.value);
                    }
                },
                type: xAxis
            },
            yAxis: {
                title: {
                    text: 'Compression Speed'
                },
                startOnTick: true,
                endOnTick: true,
                min: (yAxis == 'logarithmic') ? undefined : 0,
                labels: {
                    formatter: function() {
                        return formatSpeed(this.value);
                    }
                },
                type: yAxis
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top'
            },
            plotOptions: {
                scatter: {
                    tooltip: {
                        headerFormat: '<b>{series.name}</b>',
                        pointFormatter: function() {
                            res = ":<b>" + this.codec + "</b><hr/><br/>";
                            if (this.level != "")
                                res += "Level: " + this.level + "<br/>";
                            res += "Ratio: " + Math.round10(this.z, -2) + "<br/>";
                            res += "Compression speed: " + formatSpeed(this.y) + "<br/>";
                            res += "Decompression speed: " + formatSpeed(this.x) + "<br/>";
                            return res;
                        }
                    }
                }
            },
            series: chartData.map(function(e, i, a) {
                return {
                    name: e.plugin,
                    visible: (plugins_map[e.plugin] == undefined) ? true : plugins_map[e.plugin].visible,
                    color: colors[i % colors.length],
                    data: e.values.map(function(p) {
                        return {
                            y: p.compression_rate,
                            z: p.ratio,
                            x: p.decompression_rate,
                            codec: p.codec,
                            level: p.level
                        };
                    })
                };
            })
        }).highcharts();

        $("#compression-decompression-chart .highcharts-xaxis-title").click(function(e) {
            drawCompressionDecompressionChart(chart.userOptions.xAxis.type == "linear" ? "logarithmic" : "linear",
                chart.userOptions.yAxis.type);
        });
        $("#compression-decompression-chart .highcharts-yaxis-title").click(function(e) {
            drawCompressionDecompressionChart(chart.userOptions.xAxis.type,
                chart.userOptions.yAxis.type == "linear" ? "logarithmic" : "linear");
        });
    }

    function drawRTTRatioChart(xAxis, yAxis) {
        if (xAxis == undefined)
            xAxis = $scope.speedScale;
        if (yAxis == undefined)
            yAxis = 'linear';

        var chart = $("#rtt-ratio-chart").highcharts({
            chart: {
                type: 'scatter'
            },
            title: {
                text: null
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Round Trip Speed'
                },
                endOnTick: true,
                min: (xAxis == 'logarithmic') ? undefined : 0,
                labels: {
                    rotation: -45,
                    formatter: function() {
                        return formatSpeed(this.value);
                    }
                },
                type: xAxis
            },
            yAxis: {
                title: {
                    text: 'Compression Ratio'
                },
                startOnTick: true,
                endOnTick: true,
                min: (yAxis == 'logarithmic') ? undefined : 1,
                type: yAxis
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top'
            },
            plotOptions: {
                scatter: {
                    tooltip: {
                        headerFormat: '<b>{series.name}</b>',
                        pointFormatter: function() {
                            res = ":<b>" + this.codec + "</b><hr/><br/>";
                            if (this.level != "")
                                res += "Level: " + this.level + "<br/>";
                            res += "Ratio: " + Math.round10(this.y, -2) + "<br/>";
                            res += "Compression speed: " + formatSpeed(this.compression_rate) + "<br/>";
                            res += "Decompression speed: " + formatSpeed(this.decompression_rate) + "<br/>";
                            return res;
                        }
                    }
                }
            },
            series: chartData.map(function(e, i, a) {
                return {
                    name: e.plugin,
                    visible: (plugins_map[e.plugin] == undefined) ? true : plugins_map[e.plugin].visible,
                    color: colors[i % colors.length],
                    data: e.values.map(function(p) {
                        return {
                            y: p.ratio,
                            x: (2 * p.input_size) / (p.compress_cpu + p.decompress_cpu),
                            compression_rate: p.compression_rate,
                            decompression_rate: p.decompression_rate,
                            codec: p.codec,
                            level: p.level
                        };
                    })
                };
            })
        }).highcharts();

        $("#rtt-ratio-chart .highcharts-xaxis-title").click(function(e) {
            drawRTTRatioChart(chart.userOptions.xAxis.type == "linear" ? "logarithmic" : "linear",
                chart.userOptions.yAxis.type);
        });
        $("#rtt-ratio-chart .highcharts-yaxis-title").click(function(e) {
            drawRTTRatioChart(chart.userOptions.xAxis.type,
                chart.userOptions.yAxis.type == "linear" ? "logarithmic" : "linear");
        });
    }

    function drawTransferDecompressionChart() {
        var transferSpeed = $scope.calculatedTransferSpeed;

        var direction = $scope.transferProcessDirection;
        var uncompressedSize = dataset_map[$scope.dataset].size;
        var uncompressedTime = uncompressedSize / transferSpeed;
        var cutoff = 0;
        if ($scope.transferProcessVisible != 0)
            cutoff = uncompressedTime * ($scope.transferProcessVisible / 100);

        seriesData = [{
            name: 'Decompression',
            data: [0]
        }, {
            name: 'Transfer',
            data: [uncompressedSize / transferSpeed]
        }, {
            name: 'Compression',
            data: [0]
        }];
        categoriesData = ["No compression"];

        var sortedData = [];
        chartData.forEach(function(plugin) {
            plugin.values.forEach(function(value) {
                var desc = plugin.plugin + ":" + value.codec;
                if (plugin.values.length > 1)
                    desc += " | " + value.level;

                sortedData.push({
                    name: desc,
                    plugin: plugin.plugin,
                    codec: value.codec,
                    level: value.level,
                    ratio: value.ratio,
                    transferTime: value.compressed_size / transferSpeed,
                    decompressTime: value.decompress_cpu,
                    decompressTotalTime: (value.compressed_size / transferSpeed) + value.decompress_cpu,
                    compressTime: value.compress_cpu,
                    compressTotalTime: (value.compressed_size / transferSpeed) + value.compress_cpu,
                    totalTime: (value.compressed_size / transferSpeed) + value.compress_cpu + value.decompress_cpu
                });
            });
        });

        if ($scope.transferProcessSort == "time") {
            sortedData.sort(function(a, b) {
                var field;
                switch (direction) {
                    case "decompress":
                        field = "decompressTotalTime";
                        break;
                    case "compress":
                        field = "compressTotalTime";
                        break;
                    case "both":
                        field = "totalTime";
                        break;
                }
                return a[field] - b[field];
            });
        }

        sortedData.forEach(function(e) {
            var value;
            switch (direction) {
                case "decompress":
                    value = e.decompressTotalTime;
                    break;
                case "compress":
                    value = e.compressTotalTime;
                    break;
                case "both":
                    value = e.totalTime;
                    break;
            }

            if (cutoff == 0 || value <= cutoff) {
                categoriesData.push(e.name);
                seriesData[2].data.push({
                    y: e.compressTime,
                    data: e
                });
                seriesData[1].data.push({
                    y: e.transferTime,
                    data: e
                });
                seriesData[0].data.push({
                    y: e.decompressTime,
                    data: e
                });
            }
        });

        if (direction != "both") {
            if (direction == "decompress")
                seriesData = seriesData.slice(0, 2);
            else
                seriesData = seriesData.slice(1, 3);
        }

        $("#transfer-decompression-chart").height(100 + (categoriesData.length * 20));

        var chart = $("#transfer-decompression-chart").highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: null
            },
            xAxis: {
                title: {
                    enabled: false
                },
                categories: categoriesData
            },
            yAxis: {
                title: {
                    text: 'Transfer + Decompression Time'
                },
                min: 0
            },
            tooltip: {
                headerFormat: "",
                pointFormatter: function() {
                    if (this.data == undefined) {
                        var res = "No compression<br/>";
                        res += "Size: " + formatSize(dataset_map[$scope.dataset].size) + "<br/>";
                        res += "Total time: <b>" + formatDuration(dataset_map[$scope.dataset].size / transferSpeed) + " seconds</b><br/>";
                        return res;
                    }

                    var res = this.data.plugin + ":" + this.data.codec;
                    if (this.data.level != "")
                        res += " level " + this.data.level;
                    res += '<br/>';

                    res += "Ratio: " + Math.round10(this.data.ratio, -2) + "<br/>";

                    if (this.series.name == "Compression") {
                        res += "Compression time: <b>" + formatDuration(this.data.compressTime) + " seconds</b><br/>";
                    } else {
                        res += "Compression time: " + formatDuration(this.data.compressTime) + " seconds<br/>";
                    }

                    if (this.series.name == "Transfer") {
                        res += "Transfer time: <b>" + formatDuration(this.data.transferTime) + " seconds</b><br/>";
                    } else {
                        res += "Transfer time: " + formatDuration(this.data.transferTime) + " seconds<br/>";
                    }

                    if (this.series.name == "Decompression") {
                        res += "Decompression time: <b>" + formatDuration(this.data.decompressTime) + " seconds</b><br/>";
                    } else {
                        res += "Decompression time: " + formatDuration(this.data.decompressTime) + " seconds<br/>";
                    }

                    var totalTime;
                    switch (direction) {
                        case "decompress":
                            totalTime = this.data.decompressTotalTime;
                            break;
                        case "compress":
                            totalTime = this.data.compressTotalTime;
                            break;
                        case "both":
                            totalTime = this.data.totalTime;
                            break;
                    }
                    res += "Total time: " + formatDuration(totalTime) + " seconds<br/>";

                    if (totalTime < uncompressedTime) {
                        res += "Time savings: " + formatDuration(uncompressedTime - totalTime) + " seconds (" +
                            formatDuration(((uncompressedTime - totalTime) / uncompressedTime) * 100) + "%)";
                    } else {
                        res += "Time lost: " + formatDuration(totalTime - uncompressedTime) + " seconds (" +
                            formatDuration(((totalTime / uncompressedTime) - 1.0) * 100) + "%)";
                    }

                    return res;
                }
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: seriesData
        }).highcharts();
    }

    function drawOptimalCodecChart(xAxis, yAxis) {
        if (xAxis == undefined)
            xAxis = $scope.speedScale;
        if (yAxis == undefined)
            yAxis = 'linear';

        var seriesData = [{
            name: "Compression",
            data: []
        }, {
            name: "Decompression",
            data: []
        }, {
            name: "Average",
            data: []
        }, ];

        var compressionPoints = [];
        var decompressionPoints = [];
        var averagePoints = [];

        chartData.forEach(function(plugin) {
            plugin.values.forEach(function(value) {
                compressionPoints.push({
                    plugin: plugin.plugin,
                    data: value,
                    y: value.ratio,
                    x: value.compression_rate
                });
                decompressionPoints.push({
                    plugin: plugin.plugin,
                    data: value,
                    y: value.ratio,
                    x: value.decompression_rate
                });
                averagePoints.push({
                    plugin: plugin.plugin,
                    data: value,
                    y: value.ratio,
                    x: (value.decompression_rate + value.compression_rate) / 2
                });
            });
        });

        function sortCb(a, b) {
            if (a.y == b.y) {
                return b.x - a.x;
            }
            return b.y - a.y;
        };

        compressionPoints.sort(sortCb);
        decompressionPoints.sort(sortCb);
        averagePoints.sort(sortCb);

        function runFilter(data) {
            var c = 0;
            return data.filter(function(value) {
                if (value.x > c) {
                    c = value.x;
                    return true;
                } else {
                    return false;
                }
            });
        }

        seriesData[0].data = runFilter(compressionPoints);
        seriesData[1].data = runFilter(decompressionPoints);
        seriesData[2].data = runFilter(averagePoints);

        var chart = $("#optimal-codec-chart").highcharts({
            title: {
                text: null
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Speed'
                },
                startOnTick: true,
                endOnTick: true,
                min: (xAxis == 'logarithmic') ? undefined : 0,
                labels: {
                    rotation: -45,
                    formatter: function() {
                        return formatSpeed(this.value);
                    }
                },
                type: xAxis
            },
            yAxis: {
                title: {
                    text: 'Ratio'
                },
                type: yAxis
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top'
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: true
                    }
                }
            },
            tooltip: {
                headerFormat: '',
                pointFormatter: function() {
                    res = "<b>" + this.plugin + ":" + this.data.codec;
                    if (this.data.level != "")
                        res += " (level " + this.data.level + ")<br/>";
                    res += "</b><br/>";
                    res += "Ratio: " + Math.round10(this.y, -2) + "<br/>";
                    res += "Compression speed: " + formatSpeed(this.data.compression_rate) + "<br/>";
                    res += "Decompression speed: " + formatSpeed(this.data.decompression_rate) + "<br/>";
                    res += "Average speed: " + formatSpeed((this.data.decompression_rate + this.data.compression_rate) / 2) + "<br/>";
                    return res;
                }
            },
            series: seriesData
        }).highcharts();

        $("#optimal-codec-chart .highcharts-xaxis-title").click(function(e) {
            drawOptimalCodecChart(chart.userOptions.xAxis.type == "linear" ? "logarithmic" : "linear",
                chart.userOptions.yAxis.type);
        });
        $("#optimal-codec-chart .highcharts-yaxis-title").click(function(e) {
            drawOptimalCodecChart(chart.userOptions.xAxis.type,
                chart.userOptions.yAxis.type == "linear" ? "logarithmic" : "linear");
        });
    }

    $scope.drawTransferDecompressionChart = drawTransferDecompressionChart;

    var updateChart = function() {
        chartData = [];
        var dataIdx = {};

        $scope.data.forEach(function(e, i, a) {
            if (e.plugin == "copy")
                return;

            if (dataIdx[e.plugin] == undefined) {
                dataIdx[e.plugin] = chartData.length;
                chartData.push({
                    plugin: e.plugin,
                    values: []
                });
            }
            chartData[dataIdx[e.plugin]].values.push({
                codec: e.codec,
                level: e.level,
                ratio: e.ratio,
                compression_rate: e.compression_rate,
                decompression_rate: e.decompression_rate,
                compress_cpu: e.compress_cpu,
                decompress_cpu: e.decompress_cpu,
                input_size: e.input_size,
                compressed_size: e.compressed_size
            });
        });

        drawRatioCompressionChart();
        drawRatioDecompressionChart();
        drawCompressionDecompressionChart();
        drawRTTRatioChart();
        drawTransferDecompressionChart();
        drawOptimalCodecChart();
    };

    dataCache = [];

    $scope.bestCompressionRate = 0;
    $scope.bestDecompressionRate = 0;
    $scope.bestRatio = 0;

    function setData(data) {
        $scope.bestCompressionRate = 0;
        $scope.bestDecompressionRate = 0;
        $scope.bestRatio = 0;

        if (data != undefined) {
            $scope.data = data.filter(function(element, index, arr) {
                if (element.dataset == $scope.dataset) {

                    if (!(element.plugin == "copy" && element.codec == "copy")) {
                        if (element.compression_rate > $scope.bestCompressionRate)
                            $scope.bestCompressionRate = element.compression_rate;
                        if (element.decompression_rate > $scope.bestDecompressionRate)
                            $scope.bestDecompressionRate = element.decompression_rate;
                        if (element.ratio > $scope.bestRatio)
                            $scope.bestRatio = element.ratio;
                    }

                    return true;
                } else {
                    return false;
                }
            });
        }
    }

    $scope.$watchGroup(Array('machine', 'dataset'), function(newValues, oldValues) {
        if (dataCache[newValues[0]] != undefined) {
            $scope.data = dataCache[newValues[0]];
            setData(dataCache[newValues[0]]);
        } else {
            squashBenchmarkData(newValues[0]).then(function(data) {
                dataCache[newValues[0]] = data;
                setData(data);
            });
        }
    });

    $scope.$watchGroup(['data'], function(newData, oldData, scope) {
        if (newData[0] != undefined) {
            updateChart();
        }
    });
});