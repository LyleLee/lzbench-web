(function(){
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
	Array.prototype.forEach = function (fn, scope) {
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

$(function () {
    $('.failure-popover').popover({
        html: true,
        content: function() {
            var contents = '';
            var failures = jQuery.parseJSON($(this).attr('data-failures'));
            failures.forEach (function (e, i, a) {
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

var datasets = [
    { id: 'alice29.txt',
      source: 'Canterbury Corpus',
      sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
      description: 'English text',
      size: 152089 },
    { id: 'asyoulik.txt',
      source: 'Canterbury Corpus',
      sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
      description: 'Shakespeare',
      size: 125179 },
    { id: 'cp.html',
      source: 'Canterbury Corpus',
      sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
      description: 'HTML source',
      size: 24603 },
    { id: 'dickens',
      source: 'Silesia Corpus',
      sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
      description: 'Collected works of Charles Dickens',
      size: 10192446 },
    { id: 'enwik8',
      source: 'Large Text Compression Benchmark',
      sourceUrl: 'http://www.mattmahoney.net/dc/textdata.html',
      description: 'The first 10⁸ bytes of the English Wikipedia dump on Mar. 3, 2006',
      size: 100000000 },
    { id: 'fields.c',
      source: 'Canterbury Corpus',
      sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
      description: 'C source',
      size: 11150 },
    { id: 'fireworks.jpeg',
      source: 'Snappy',
      sourceUrl: 'https://github.com/google/snappy/tree/master/testdata',
      description: 'A JPEG image',
      size: 123093 },
    { id: 'geo.protodata',
      source: 'Snappy',
      sourceUrl: 'https://github.com/google/snappy/tree/master/testdata',
      description: 'A set of Protocol Buffer data',
      size: 118588 },
    { id: 'grammar.lsp',
      source: 'Canterbury Corpus',
      sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
      description: 'LISP source',
      size: 3721 },
    { id: 'kennedy.xls',
      source: 'Canterbury Corpus',
      sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
      description: 'Excel Spreadsheet',
      size: 1029744 },
    { id: 'lcet10.txt',
      source: 'Canterbury Corpus',
      sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
      description: 'Technical writing',
      size: 426754 },
    { id: 'mozilla',
      source: 'Silesia Corpus',
      sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
      description: 'Tarred executables of Mozilla 1.0 (Tru64 UNIX edition)',
      size: 51220480 },
    { id: 'mr',
      source: 'Silesia Corpus',
      sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
      description: 'Medical magnetic resonanse image',
      size: 9970564 },
    { id: 'nci',
      source: 'Silesia Corpus',
      sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
      description: 'Chemical database of structures',
      size: 33553445 },
    { id: 'ooffice',
      source: 'Silesia Corpus',
      sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
      description: 'A dll from Open Office.org 1.01',
      size: 6152192 },
    { id: 'osdb',
      source: 'Silesia Corpus',
      sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
      description: 'Sample database in MySQL format from Open Source Database Benchmark',
      size: 10085684 },
    { id: 'paper-100k.pdf',
      source: 'Snappy',
      sourceUrl: 'https://github.com/google/snappy/tree/master/testdata',
      description: 'A PDF',
      size: 102400 },
    { id: 'plrabn12.txt',
      source: 'Canterbury Corpus',
      sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
      description: 'Poetry',
      size: 481861 },
    { id: 'ptt5',
      source: 'Canterbury Corpus',
      sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
      description: 'CCITT test set',
      size: 513216 },
    { id: 'reymont',
      source: 'Silesia Corpus',
      sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
      description: 'Text of the book Chłopi by Władysław Reymont',
      size: 6627202 },
    { id: 'samba',
      source: 'Silesia Corpus',
      sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
      description: 'Tarred source code of Samba 2-2.3 ',
      size: 21606400 },
    { id: 'sao',
      source: 'Silesia Corpus',
      sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
      description: 'The SAO star catalog',
      size: 7251944 },
    { id: 'sum',
      source: 'Canterbury Corpus',
      sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
      description: 'SPARC Executable',
      size: 38240 },
    { id: 'urls.10K',
      source: 'Snappy',
      sourceUrl: 'https://github.com/google/snappy/tree/master/testdata',
      description: 'List of 10000 URLs',
      size: 702087 },
    { id: 'xargs.1',
      source: 'Canterbury Corpus',
      sourceUrl: 'http://corpus.canterbury.ac.nz/descriptions/#cantrbry',
      description: 'GNU manual page',
      size: 4227 },
    { id: 'webster',
      source: 'Silesia Corpus',
      sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
      description: 'The 1913 Webster Unabridged Dictionary',
      size: 41458703 },
    { id: 'xml',
      source: 'Silesia Corpus',
      sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
      description: 'Collected XML files',
      size: 5345280 },
    { id: 'x-ray',
      source: 'Silesia Corpus',
      sourceUrl: 'http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia',
      description: 'X-ray medical picture',
      size: 8474240 }
];

var dataset_map = {};
datasets.forEach (function (e, i, a) {
    dataset_map[e.id] = e;
});

var machines = [
    { name: "peltast",
      cpu: "Intel® Xeon® Processor E3-1225 v3",
      cpuUrl: "http://ark.intel.com/products/75461/",
      architecture: "x86_64",
      speed: 3200 * 1000000,
      memory: 1024 * 20,
      platform: "Lenovo ThinkServer TS140",
      platformUrl: "http://shop.lenovo.com/us/en/servers/thinkserver/ts-series/ts140/",
      distro: "Fedora 21",
      kernel: "4.1.4",
      compiler: "gcc-5.1.1" },
    { name: "hoplite",
      cpu: "Intel® Core™ i7-2630QM",
      cpuUrl: "http://ark.intel.com/products/52219",
      architecture: "x86_64",
      speed: 2000 * 1000000,
      memory: 1024 * 6,
      platform: "Toshiba Satellite A660-X",
      platformUrl: "http://support.toshiba.com/support/modelHome?freeText=PSAW6U-02100C",
      distro: "Fedora 21",
      kernel: "4.1.4" },
    { name: "phalanx",
      cpu: "Intel® Atom™ D525",
      cpuUrl: "http://ark.intel.com/products/49490",
      architecture: "x86_64",
      speed: 1800 * 1000000,
      memory: 1024 * 4,
      platform: "Asus AT5NM10T-I",
      platformUrl: "http://www.asus.com/Motherboards/AT5NM10TI/",
      distro: "Fedora 21",
      kernel: "3.18.7" },
    { name: "s-desktop",
      cpu: "Intel® Core™ i5-2400",
      cpuUrl: "http://ark.intel.com/products/52207",
      architecture: "x86_64",
      speed: 3100 * 1000000,
      memory: 1024 * 4,
      platform: "Asus P8Z68-V",
      platformUrl: "http://www.asus.com/Motherboards/P8Z68V/",
      distro: "Fedora 21",
      kernel: "3.18.7" },
    { name: "e-desktop",
      cpu: "Intel® Core™ i3-2105",
      cpuUrl: "http://ark.intel.com/products/55448",
      architecture: "x86_64",
      speed: 3100 * 1000000,
      memory: 1024 * 8,
      platform: "Asus P8H61-H",
      platformUrl: "http://www.asus.com/Motherboards/P8H61M/",
      distro: "Fedora 22",
      kernel: "4.1.4",
      compiler: "gcc-5.1.1" },
    // { name: "raspberry-pi-bplus",
    //   cpu: "Broadcom BCM2835",
    //   cpuUrl: "http://www.broadcom.com/products/BCM2835",
    //   architecture: "armv6l",
    //   speed: 700 * 1000000,
    //   memory: 512,
    //   platform: "Raspberry Pi Model B+",
    //   platformUrl: "http://www.raspberrypi.org/products/model-b-plus/",
    //   distro: "Raspbian",
    //   kernel: "" },
    { name: "raspberry-pi-2",
      cpu: "Broadcom BCM2709",
      cpuUrl: "http://www.broadcom.com/products/BCM2709",
      architecture: "armv7l",
      speed: 900 * 1000000,
      memory: 1024,
      platform: "Raspberry Pi 2 Model B",
      platformUrl: "http://www.raspberrypi.org/products/raspberry-pi-2-model-b/",
      distro: "Raspbian Jessie",
      kernel: "3.18.11",
      compiler: "gcc-4.9.2",
      failures: [{
          dataset: "x-ray",
          plugin: "brotli",
	  codec: "brotli",
          issue: "https://github.com/google/brotli/issues/46"
      }] },
    // { name: "pandaboard-es",
    //   cpu: "Texas Instruments OMAP4460",
    //   cpuUrl: "http://www.ti.com/product/omap4460",
    //   architecture: "armv7l",
    //   speed: 1200 * 1000000,
    //   memory: 1024,
    //   platform: "PandaBoard ES revision B1",
    //   platformUrl: "http://pandaboard.org/node/300/#PandaES",
    //   distro: "Ubuntu 14.10",
    //   kernel: "3.18.3" },
    { name: "beagleboard-xm",
      cpu: "Texas Instruments DM3730",
      cpuUrl: "http://www.ti.com/product/dm3730",
      architecture: "armv7l",
      speed: 1000 * 1000000,
      memory: 512,
      platform: "BeagleBoard-xM revision B",
      platformUrl: "http://beagleboard.org/beagleboard-xm",
      distro: "Ubuntu 15.04",
      kernel: "4.1.5",
      compiler: "gcc-4.9.2",
      failures: [{
          dataset: "x-ray",
          plugin: "brotli",
	  codec: "brotli",
          issue: "https://github.com/google/brotli/issues/46"
      }] },
    { name: "odroid-c1",
      cpu: "Amlogic S805",
      cpuUrl: "http://www.amlogic.com/product03.htm",
      architecture: "armv7l",
      speed: 1500 * 1000000,
      memory: 1024,
      platform: "ODROID-C1",
      platformUrl: "http://www.hardkernel.com/main/products/prdt_info.php?g_code=G141578608433",
      distro: "Ubuntu 14.04.4",
      kernel: "3.10.80",
      compiler: "gcc-4.9.2",
      failures: [{
          dataset: "x-ray",
          plugin: "brotli",
	  codec: "brotli",
          issue: "https://github.com/google/brotli/issues/46"
      }] },
    // { name: "igepv5",
    //   cpu: "Texas Instruments OMAP5432",
    //   cpuUrl: "http://www.ti.com/product/omap5432",
    //   architecture: "armv7l",
    //   speed: 1500 * 1000000,
    //   memory: 4096,
    //   platform: "ISEE IGEPv5",
    //   platformUrl: "https://isee.biz/products/igep-processor-boards/igepv5-omap5432",
    //   distro: "Ubuntu",
    //   kernel: "" },
    { name: "satellite-a205",
      cpu: "Intel® Celeron® Processor 540",
      cpuUrl: "http://ark.intel.com/products/30774/Intel-Celeron-Processor-540-1M-Cache-1_86-GHz-533-MHz-FSB",
      architecture: "x86_64",
      speed: 1860 * 1000000,
      memory: 1024,
      platform: "Toshiba Satellite A205-S5805",
      platformUrl: "http://support.toshiba.com/support/modelHome?freeText=1909175",
      distro: "Fedora 21",
      kernel: "3.18.8",
      failures: [{
          dataset: "x-ray",
          plugin: "brotli",
	  codec: "brotli",
          issue: "https://github.com/google/brotli/issues/46"
      }] },
];

var machine_map = {};
machines.forEach (function (e, i, a) {
    machine_map[e.name] = e;
});

var plugins = [
    { id: "brotli",
      name: "Brotli",
      libraryUrl: "https://github.com/google/brotli",
      license: "Apache 2.0",
      revision: "d811b186c5037b434d56ddb831ceccdf5a954687",
      codecs: [ { name: "brotli",
		  levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] } ] },
    { id: "bsc",
      name: "bsc",
      libraryUrl: "http://libbsc.com/",
      license: "Apache 2.0",
      revision: "b2b07421381b19b2fada8b291f3cdead10578abc",
      codecs: [ { name: "bsc" } ] },
    { id: "bzip2",
      name: "bzip2",
      libraryUrl: "http://bzip.org/",
      license: "zlib & 3-clause BSD hybrid",
      version: "1.0.6",
      codecs: [
	  { name: "bzip2",
	    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9] } ] },
    { id: "copy",
      name: "Copy",
      codecs: [ { name: "copy" } ] },
    { id: "crush",
      name: "CRUSH",
      libraryUrl: "http://compressme.net/",
      license: "Public Domain",
      version: "1.0",
      codecs: [
	  { name: "crush",
	    levels: [0, 1, 2] } ] },
    { id: "csc",
      name: "CSC",
      libraryUrl: "https://github.com/fusiyuan2010/CSC",
      license: "MIT",
      revision: "c8f1580bd765c8e77d6cffb6bf900bf70e31aa0c",
      codecs: [ { name: "csc",
		  levels: [1, 2, 3, 4, 5] } ] },
    { id: "density",
      name: "DENSITY",
      libraryUrl: "https://github.com/centaurean/density",
      license: "3-clause BSD",
      revesion: "dbc43e83295df18f650ed54fc423778ecacad4bd",
      codecs: [
	  { name: "density",
	    levels: [1, 7, 9] } ] },
    // { id: "doboz",
    //   name: "Doboz",
    //   libraryUrl: "https://bitbucket.org/attila_afra/doboz",
    //   codecs: [ { name: "doboz" } ] },
    { id: "fari",
      name: "FastARI",
      libraryUrl: "https://github.com/davidcatt/FastARI",
      license: "MIT",
      revision: "19845efa6294c8af4f9d5bd1d3e46dfbd0c0c1c5",
      codecs: [ { name: "fari" } ] },
    { id: "fastlz",
      name: "FastLZ",
      libraryUrl: "http://fastlz.org/",
      license: "MIT",
      revision: "12",
      codecs: [
	  { name: "fastlz",
	    levels: [1, 2] } ] },
    { id: "gipfeli",
      name: "Gipfeli",
      libraryUrl: "https://github.com/google/gipfeli",
      license: "3-clause BSD",
      revision: "65b9721308a357f6aa261c11d0af291d10d0b96c",
      codecs: [ { name: "gipfeli" } ] },
    { id: "lz4",
      name: "LZ4",
      libraryUrl: "https://code.google.com/p/lz4/",
      license: "3-clause BSD",
      revision: "d86dc916771c126afb797637dda9f6421c0cb998",
      codecs: [
	  { name: "lz4",
	    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
	  { name: "lz4f",
	    levels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] } ] },
    { id: "lzf",
      name: "liblzf",
      libraryUrl: "http://oldhome.schmorp.de/marc/liblzf.html",
      license: "2-clause BSD or GPLv2+",
      codecs: [ { name: "lzf" } ] },
    { id: "lzg",
      name: "liblzg",
      libraryUrl: "http://liblzg.bitsnbites.eu/",
      license: "zlib",
      version: "1.0.8",
      codecs: [
	  { name: "lzg",
	    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9] } ] },
    { id: "lzham",
      name: "LZHAM",
      libraryUrl: "https://github.com/richgel999/lzham_codec/",
      license: "MIT",
      revision: "fb1a9b0a28d5194ad6a643ed89d704a6ffe1d91a",
      codecs: [
	  { name: "lzham",
	    levels: [0, 1, 2, 3, 4] } ] },
    { id: "lzjb",
      name: "LZJB",
      libraryUrl: "https://en.wikipedia.org/wiki/LZJB",
      license: "CDDL",
      codecs: [ { name: "lzjb" } ] },
    { id: "lzma",
      name: "XZ Utils",
      libraryUrl: "http://tukaani.org/xz/",
      license: "Public Domain",
      version: "5.2.1",
      codecs: [
	  { name: "lzma",
	    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
	  { name: "lzma1",
	    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
	  { name: "lzma2",
	    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
	  { name: "xz",
	    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9] } ] },
    { id: "lzo",
      name: "LZO",
      libraryUrl: "http://www.oberhumer.com/opensource/lzo/",
      license: "GPLv2+",
      version: "2.09",
      codecs: [
	  { name: "lzo1",
	    levels: [1, 99] },
	  { name: "lzo1a",
	    levels: [1, 99] },
	  { name: "lzo1b",
	    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 999] },
	  { name: "lzo1c",
	    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 999] },
	  { name: "lzo1f",
	    levels: [1, 999] },
	  { name: "lzo1x",
	    levels: [1, 11, 12, 15, 999] },
	  { name: "lzo1y",
	    levels: [1, 999] },
	  { name: "lzo1z",
	    levels: [999] } ] },
    { id: "ms-compress",
      name: "ms-compress",
      libraryUrl: "https://github.com/coderforlife/ms-compress/",
      license: "GPLv3+",
      revision: "a179b8d46c76048872470ba449f672aa064131e6",
      codecs: [
    	  { name: "lznt1" },
    	  { name: "xpress" },
    	  { name: "xpress-huffman" },
      ] },
    { id: "ncompress",
      name: "ncompress",
      libraryUrl: "http://ncompress.sourceforge.net/",
      license: "Public Domain",
      version: "4.2.4.4",
      codecs: [
	  { name: 'compress' }
      ] },
    { id: "pithy",
      name: "Pithy",
      libraryUrl: "https://github.com/johnezang/pithy",
      license: "3-clause BSD",
      revision: "d7d5bd3a20f97d46454f9e651ec6b3dd5801885e",
      codecs: [
          { name: "pithy",
	    levels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
      ] },
    { id: "quicklz",
      name: "QuickLZ",
      libraryUrl: "http://www.quicklz.com/",
      license: "GPL v1, v2, or v3",
      version: "1.5.0",
      codecs: [ { name: "quicklz" } ] },
    { id: "snappy",
      name: "Snappy",
      libraryUrl: "https://code.google.com/p/snappy/",
      license: "3-clause BSD",
      version: "1.1.2",
      codecs: [
    	  { name: "snappy" },
    	  { name: "snappy-framed" }
      ] },
    // { id: "wflz",
    //   name: "wfLZ",
    //   libraryUrl: "https://code.google.com/p/wflz/",
    //   revision: "cfbb02d7a87ab3e39c6a4394da2281744a671ed2",
    //   codecs: [
    // 	  { name: "wflz",
    // 	    levels: [1, 2] },
    // 	  { name: "wflz-chunked",
    // 	    levels: [1, 2] },
    //   ] },
    { id: "yalz77",
      name: "yalz77",
      libraryUrl: "https://bitbucket.org/tkatchev/yalz77",
      revision: "a5078995ded6c74e98aed279c0ed8b6e7c5e35ff",
      codecs: [
	  { name: "yalz77" },
      ] },
    { id: "zlib",
      name: "zlib",
      libraryUrl: "http://zlib.net/",
      license: "zlib",
      version: "1.2.8",
      codecs: [
    	  { name: "deflate",
    	    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    	  { name: "gzip",
    	    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    	  { name: "zlib",
    	    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
      ] },
    // { id: "zling",
    //   name: "libzling",
    //   libraryUrl: "https://github.com/richox/libzling",
    //   codecs: [
    // 	  { name: "zling",
    // 	    levels: [0, 1, 2, 3, 4] },
    //   ] },
    { id: "zpaq",
      name: "ZPAQ",
      libraryUrl: "http://mattmahoney.net/dc/zpaq.html",
      license: "Public Domain",
      version: "7.05",
      codecs: [
    	  { name: "zpaq",
    	    levels: [1, 2, 3, 4, 5] },
      ] },
    { id: "zstd",
      name: "Zstandard",
      libraryUrl: "https://github.com/Cyan4973/zstd",
      license: "2-clause BSD",
      revision: "1eca5f52994434d3b0427c9014403cf01495f54a",
      codecs: [
    	  { name: "zstd" },
      ] }
];

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

    function zeroPad (n, width, z) {
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z || '0') + n;
    }

    [60*60*24, 60*60, 60, 1].forEach (function (d) {
	if ((seconds >= d) || w) {
	    x = Math.floor (seconds / d);
	    seconds -= d * x;
	    res += (w ? ':' : '') + zeroPad (x, 2);
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
	return $q(function (resolve, reject) {
	    d3.csv ("data/" + machineId + ".csv", function(data) {
		resolve(data.map (function (val) {
		    var input_size = dataset_map[val.dataset].size;
		    return {
			dataset: val.dataset,
			plugin: val.plugin,
			codec: val.codec,
			level: val.level,

			input_size: input_size,
			compressed_size: parseInt(val.compressed_size),

			compressed_size: parseInt(val.compressed_size),
			compress_cpu: parseFloat(val.compress_cpu),
			compress_wall: parseFloat(val.compress_wall),
			decompress_cpu: parseFloat(val.decompress_cpu),
			decompress_wall: parseFloat(val.decompress_wall),

			ratio: input_size / val.compressed_size,
			compression_rate: input_size / val.compress_cpu,
			decompression_rate: input_size / val.decompress_cpu
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

squashBenchmarkApp.controller("SquashBenchmarkCtrl", function ($scope, squashBenchmarkData) {
    $scope.datasets = datasets;
    $scope.machines = machines;
    $scope.plugins = plugins;

    $scope.query_string = function () {
	// http://stackoverflow.com/a/979995
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
	    var pair = vars[i].split("=");
	    if (typeof query_string[pair[0]] === "undefined") {
		query_string[pair[0]] = pair[1];
	    } else if (typeof query_string[pair[0]] === "string") {
		var arr = [ query_string[pair[0]], pair[1] ];
		query_string[pair[0]] = arr;
	    } else {
		query_string[pair[0]].push(pair[1]);
	    }
	}
	return query_string;
    } ();

    $scope.random_dataset = true;
    if ($scope.query_string.dataset != undefined && dataset_map[$scope.query_string.dataset] != undefined) {
	$scope.dataset = $scope.query_string.dataset;
	$scope.random_dataset = false;
    } else {
	do {
	    $scope.dataset = datasets[Math.floor (Math.random () * datasets.length)].id;
	} while ($scope.dataset == "fireworks.jpeg");
    }

    $scope.random_machine = true;
    if ($scope.query_string.machine != undefined && machine_map[$scope.query_string.machine] != undefined) {
	$scope.machine = $scope.query_string.machine;
	$scope.random_machine = false;
    } else {
	$scope.machine = machines[Math.floor (Math.random () * machines.length)].name;
    }

    $scope.datasetSort = 'id';
    $scope.machineSort = 'name';

    $scope.data_points_per_machine = 0;
    $scope.codec_plugin_map = {};
    $scope.codecs = [];
    plugins.forEach (function (plugin, i, a) {
	plugin.codecs.forEach (function (codec, ci, ca) {
	    $scope.codecs.push (codec);
	    $scope.codec_plugin_map[plugin.id + ":" + codec.id];
	    $scope.data_points_per_machine += (codec.levels == undefined) ? 1 : codec.levels.length;
	});
    });

    $scope.transferSpeed = 125;
    $scope.transferSpeedUnits = "MiB/s";
    $scope.transferProcessVisible = 125;
    $scope.transferProcessSort = "time";
    $scope.transferProcessDirection = "decompress";

    var colors = d3.scale.category20().range()
	.concat (d3.scale.category20b().range(),
		 d3.scale.category20c().range());
    var chartData = [];

    function drawRatioCompressionChart (xAxis, yAxis) {
	if (xAxis == undefined)
	    xAxis = 'linear';
	if (yAxis == undefined)
	    yAxis = 'linear';

	var chart = $("#ratio-compression-chart").highcharts({
            chart: { type: 'scatter' },
            title: { text: null },
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
		    formatter: function() { return formatSpeed(this.value); }
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
			pointFormatter: function () {
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
            series: chartData.map(function (e, i, a) {
		return {
		    name: e.plugin,
		    color: colors[i % colors.length],
		    data: e.values.map (function (p) {
			return { x: p.compression_rate,
				 y: p.ratio,
				 z: p.decompression_rate,
				 codec: p.codec,
				 level: p.level };
		    })
		};
	    })
	}).highcharts();

	$("#ratio-compression-chart .highcharts-xaxis-title").click(function (e) {
	    drawRatioCompressionChart(chart.userOptions.xAxis.type == "linear" ? "logarithmic" : "linear",
				      chart.userOptions.yAxis.type);
	});
	$("#ratio-compression-chart .highcharts-yaxis-title").click(function (e) {
	    drawRatioCompressionChart(chart.userOptions.xAxis.type,
				      chart.userOptions.yAxis.type == "linear" ? "logarithmic" : "linear");
	});
    }

    function drawRatioDecompressionChart (xAxis, yAxis) {
	if (xAxis == undefined)
	    xAxis = 'linear';
	if (yAxis == undefined)
	    yAxis = 'linear';

	var chart = $("#ratio-decompression-chart").highcharts({
            chart: { type: 'scatter' },
            title: { text: null },
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
		    formatter: function() { return formatSpeed(this.value); }
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
			pointFormatter: function () {
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
            series: chartData.map(function (e, i, a) {
		return {
		    name: e.plugin,
		    color: colors[i % colors.length],
		    data: e.values.map (function (p) {
			return { z: p.compression_rate,
				 y: p.ratio,
				 x: p.decompression_rate,
				 codec: p.codec,
				 level: p.level };
		    })
		};
	    })
	}).highcharts();

	$("#ratio-decompression-chart .highcharts-xaxis-title").click(function (e) {
	    drawRatioDecompressionChart(chart.userOptions.xAxis.type == "linear" ? "logarithmic" : "linear",
					chart.userOptions.yAxis.type);
	});
	$("#ratio-decompression-chart .highcharts-yaxis-title").click(function (e) {
	    drawRatioDecompressionChart(chart.userOptions.xAxis.type,
					chart.userOptions.yAxis.type == "linear" ? "logarithmic" : "linear");
	});
    }

    function drawCompressionDecompressionChart (xAxis, yAxis) {
	if (xAxis == undefined)
	    xAxis = 'linear';
	if (yAxis == undefined)
	    yAxis = 'linear';

	var chart = $("#compression-decompression-chart").highcharts({
            chart: { type: 'scatter' },
            title: { text: null },
            xAxis: {
		title: {
                    enabled: true,
                    text: 'Decompression Speed'
		},
		endOnTick: true,
		min: (xAxis == 'logarithmic') ? undefined : 0,
		labels: {
		    rotation: -45,
		    formatter: function() { return formatSpeed(this.value); }
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
		    formatter: function() { return formatSpeed(this.value); }
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
			pointFormatter: function () {
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
            series: chartData.map(function (e, i, a) {
		return {
		    name: e.plugin,
		    color: colors[i % colors.length],
		    data: e.values.map (function (p) {
			return { y: p.compression_rate,
				 z: p.ratio,
				 x: p.decompression_rate,
				 codec: p.codec,
				 level: p.level };
		    })
		};
	    })
	}).highcharts();

	$("#compression-decompression-chart .highcharts-xaxis-title").click(function (e) {
	    drawCompressionDecompressionChart(chart.userOptions.xAxis.type == "linear" ? "logarithmic" : "linear",
					      chart.userOptions.yAxis.type);
	});
	$("#compression-decompression-chart .highcharts-yaxis-title").click(function (e) {
	    drawCompressionDecompressionChart(chart.userOptions.xAxis.type,
					      chart.userOptions.yAxis.type == "linear" ? "logarithmic" : "linear");
	});
    }

    function drawRTTRatioChart (xAxis, yAxis) {
	if (xAxis == undefined)
	    xAxis = 'linear';
	if (yAxis == undefined)
	    yAxis = 'linear';

	var chart = $("#rtt-ratio-chart").highcharts({
            chart: { type: 'scatter' },
            title: { text: null },
            xAxis: {
		title: {
                    enabled: true,
                    text: 'Round Trip Speed'
		},
		endOnTick: true,
		min: (xAxis == 'logarithmic') ? undefined : 0,
		labels: {
		    rotation: -45,
		    formatter: function() { return formatSpeed(this.value); }
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
			pointFormatter: function () {
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
            series: chartData.map(function (e, i, a) {
		return {
		    name: e.plugin,
		    color: colors[i % colors.length],
		    data: e.values.map (function (p) {
			return { y: p.ratio,
				 x: (2 * p.input_size) / (p.compress_cpu + p.decompress_cpu),
				 compression_rate: p.compression_rate,
				 decompression_rate: p.decompression_rate,
				 codec: p.codec,
				 level: p.level };
		    })
		};
	    })
	}).highcharts();

	$("#rtt-ratio-chart .highcharts-xaxis-title").click(function (e) {
	    drawRTTRatioChart(chart.userOptions.xAxis.type == "linear" ? "logarithmic" : "linear",
			      chart.userOptions.yAxis.type);
	});
	$("#rtt-ratio-chart .highcharts-yaxis-title").click(function (e) {
	    drawRTTRatioChart(chart.userOptions.xAxis.type,
			      chart.userOptions.yAxis.type == "linear" ? "logarithmic" : "linear");
	});
    }

    function drawTransferDecompressionChart () {
	var transferSpeed = $scope.transferSpeed;
	switch ($scope.transferSpeedUnits) {
  	case "KiB/s":
	    transferSpeed = transferSpeed * 1024;
	    break;
  	case "MiB/s":
	    transferSpeed = transferSpeed * (1024 * 1024);
	    break;
  	case "GiB/s":
	    transferSpeed = transferSpeed * (1024 * 1024 * 1024);
	    break;
	}

	var direction = $scope.transferProcessDirection;
	var uncompressedSize = dataset_map[$scope.dataset].size;
	var uncompressedTime = uncompressedSize / transferSpeed;
	var cutoff = 0;
	if ($scope.transferProcessVisible != 0)
	    cutoff = uncompressedTime * ($scope.transferProcessVisible / 100);

	seriesData = [
	    {
		name: 'Decompression',
		data: [0]
	    }, {
		name: 'Transfer',
		data: [uncompressedSize / transferSpeed]
	    }, {
		name: 'Compression',
		data: [0]
	    }
	];
	categoriesData = ["No compression"];

	var sortedData = [];
	chartData.forEach (function (plugin) {
	    plugin.values.forEach (function (value) {
		var desc = plugin.plugin + ":" + value.codec;
		if (plugin.values.length > 1)
		    desc += " | " + value.level;

		sortedData.push ({
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
	    sortedData.sort (function (a, b) {
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

	sortedData.forEach (function (e) {
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
		categoriesData.push (e.name);
		seriesData[2].data.push ({
		    y: e.compressTime,
		    data: e
		});
		seriesData[1].data.push ({
		    y: e.transferTime,
		    data: e
		});
		seriesData[0].data.push ({
		    y: e.decompressTime,
		    data: e
		});
	    }
	});

	if (direction != "both") {
	    if (direction == "decompress")
		seriesData = seriesData.slice (0, 2);
	    else
		seriesData = seriesData.slice (1, 3);
	}

	$("#transfer-decompression-chart").height (100 + (categoriesData.length * 20));

	var chart = $("#transfer-decompression-chart").highcharts({
            chart: { type: 'bar' },
            title: { text: null },
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
		pointFormatter: function () {
		    if (this.data == undefined) {
			var res = "No compression<br/>";
			res += "Size: " + formatSize (dataset_map[$scope.dataset].size) + "<br/>";
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

    function drawOptimalCodecChart (xAxis, yAxis) {
	if (xAxis == undefined)
	    xAxis = 'linear';
	if (yAxis == undefined)
	    yAxis = 'linear';

	var seriesData = [
	    {
		name: "Compression",
		data: []
	    }, {
		name: "Decompression",
		data: []
	    }, {
		name: "Average",
		data: []
	    },
	];

	var compressionPoints = [];
	var decompressionPoints = [];
	var averagePoints = [];

	chartData.forEach (function (plugin) {
	    plugin.values.forEach (function (value) {
		compressionPoints.push ({
		    plugin: plugin.plugin,
		    data: value,
		    y: value.ratio,
		    x: value.compression_rate
		});
		decompressionPoints.push ({
		    plugin: plugin.plugin,
		    data: value,
		    y: value.ratio,
		    x: value.decompression_rate
		});
		averagePoints.push ({
		    plugin: plugin.plugin,
		    data: value,
		    y: value.ratio,
		    x: (value.decompression_rate + value.compression_rate) / 2
		});
	    });
	});

	function sortCb (a, b) {
	    if (a.y == b.y) {
		return b.x - a.x;
	    }
	    return b.y - a.y;
	};

	compressionPoints.sort (sortCb);
	decompressionPoints.sort (sortCb);
	averagePoints.sort (sortCb);

	function runFilter (data) {
	    var c = 0;
	    return data.filter (function (value) {
		if (value.x > c) {
		    c = value.x;
		    return true;
		} else {
		    return false;
		}
	    });
	}

	seriesData[0].data = runFilter (compressionPoints);
	seriesData[1].data = runFilter (decompressionPoints);
	seriesData[2].data = runFilter (averagePoints);

	var chart = $("#optimal-codec-chart").highcharts({
            title: { text: null },
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
		    formatter: function() { return formatSpeed(this.value); }
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
		pointFormatter: function () {
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

	$("#optimal-codec-chart .highcharts-xaxis-title").click(function (e) {
	    drawOptimalCodecChart(chart.userOptions.xAxis.type == "linear" ? "logarithmic" : "linear",
				  chart.userOptions.yAxis.type);
	});
	$("#optimal-codec-chart .highcharts-yaxis-title").click(function (e) {
	    drawOptimalCodecChart(chart.userOptions.xAxis.type,
				  chart.userOptions.yAxis.type == "linear" ? "logarithmic" : "linear");
	});
    }

    $scope.drawTransferDecompressionChart = drawTransferDecompressionChart;

    var updateChart = function () {
	chartData = [];
	var dataIdx = {};

	$scope.data.forEach (function (e, i, a) {
	    if (e.plugin == "copy")
		return;

	    if (dataIdx[e.plugin] == undefined) {
		dataIdx[e.plugin] = chartData.length;
		chartData.push ({ plugin: e.plugin, values: [] });
	    }
	    chartData[dataIdx[e.plugin]].values.push ({
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

    function setData (data) {
	$scope.bestCompressionRate = 0;
	$scope.bestDecompressionRate = 0;
	$scope.bestRatio = 0;

	if (data != undefined) {
	    $scope.data = data.filter (function(element, index, arr) {
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

    $scope.$watchGroup (Array('machine', 'dataset'), function(newValues, oldValues) {
	if (dataCache[newValues[0]] != undefined) {
	    $scope.data = dataCache[newValues[0]];
	    setData(dataCache[newValues[0]]);
	} else {
    	    squashBenchmarkData(newValues[0]).then (function(data) {
		dataCache[newValues[0]] = data;
		setData(data);
    	    });
	}
    });

    $scope.$watchGroup (['data'], function (newData, oldData, scope) {
	if (newData[0] != undefined) {
            updateChart ();
	}
    })
});
