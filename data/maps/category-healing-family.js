import { makeMaps } from "./category-healing.js";

const previewOverrides = {
  1: {
    title: "MAP 1 \u2014 GI\u00c1 \u0110\u00ccNH N\u00c0Y \u0110ANG TH\u1eacT S\u1ef0 MANG N\u0102NG L\u01af\u1ee2NG NH\u01af TH\u1ebe N\u00c0O?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  2: {
    title: "MAP 2 \u2014 \u0110I\u1ec0U KHI\u1ebeN C\u00c1C TH\u00c0NH VI\u00caN C\u1ea2M TH\u1ea4Y AN TO\u00c0N HO\u1eb6C \u00c1P L\u1ef0C TRONG GIA \u0110\u00ccNH",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  3: {
    title: "MAP 3 \u2014 KI\u1ec2U C\u1ea2M X\u00daC \u0110ANG V\u1eacN H\u00c0NH M\u1ea0NH NH\u1ea4T TRONG M\u00c1I NH\u00c0 N\u00c0Y",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  4: {
    title: "MAP 4 \u2014 \u0110I\u1ec0U KHI\u1ebeN C\u00c1C TH\u00c0NH VI\u00caN KH\u00d3 TH\u1eacT S\u1ef0 M\u1ede L\u00d2NG V\u1edaI NHAU",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  5: {
    title: "MAP 5 \u2014 V\u00cc SAO GI\u00c1 \u0110\u00ccNH N\u00c0Y D\u1ec4 XU\u1ea4T HI\u1ec6N KHO\u1ea2NG C\u00c1CH C\u1ea2M X\u00daC?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  6: {
    title: "MAP 6 \u2014 \u0110I\u1ec0U KHI\u1ebeN M\u1eccI NG\u01af\u1edcI S\u1ed0NG B\u1eb0NG TR\u00c1CH NHI\u1ec6M H\u01a0N K\u1ebeT N\u1ed0I",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  7: {
    title: "MAP 7 \u2014 \u0110I\u1ec0U C\u00c1C TH\u00c0NH VI\u00caN LU\u00d4N MU\u1ed0N \u0110\u01af\u1ee2C HI\u1ec2U NH\u01afNG KH\u00d4NG N\u00d3I RA",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  8: {
    title: "MAP 8 \u2014 KI\u1ec2U Y\u00caU TH\u01af\u01a0NG M\u00c0 GIA \u0110\u00ccNH N\u00c0Y \u0110ANG TH\u1ec2 HI\u1ec6N",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  9: {
    title: "MAP 9 \u2014 \u0110I\u1ec0U KHI\u1ebeN GIA \u0110\u00ccNH N\u00c0Y C\u00d3 TI\u1ec0M N\u0102NG CH\u1eeeA L\u00c0NH M\u1ea0NH",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  10: {
    title: "MAP 10 \u2014 \u0110I\u1ec0U GIA \u0110\u00ccNH N\u00c0Y \u0110ANG THI\u1ebeU NH\u1ea4T V\u1ec0 M\u1eb6T C\u1ea2M X\u00daC",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  11: {
    title: "MAP 11 \u2014 KHI N\u00c0O C\u00c1C TH\u00c0NH VI\u00caN TH\u1eacT S\u1ef0 C\u1ea2M TH\u1ea4Y \u0110\u01af\u1ee2C K\u1ebeT N\u1ed0I?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  12: {
    title: "MAP 12 \u2014 \u0110I\u1ec0U KHI\u1ebeN M\u1ed8T NG\u01af\u1edcI C\u1ea2M TH\u1ea4Y M\u00ccNH KH\u00d4NG \u0110\u01af\u1ee2C TH\u1ea4U HI\u1ec2U TRONG GIA \u0110\u00ccNH",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  13: {
    title: "MAP 13 \u2014 KI\u1ec2U \u00c1P L\u1ef0C \u0110ANG \u00c2M TH\u1ea6M T\u1ed2N T\u1ea0I TRONG M\u00c1I NH\u00c0 N\u00c0Y",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  14: {
    title: "MAP 14 \u2014 \u0110I\u1ec0U M\u1eccI NG\u01af\u1edcI \u0110ANG C\u1ed0 CHE GI\u1ea4U KH\u1eceI NHAU",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  15: {
    title: "MAP 15 \u2014 \u0110I\u1ec0U GIA \u0110\u00ccNH N\u00c0Y \u0110ANG TH\u1eacT S\u1ef0 C\u1ea6N \u0110\u1ec2 CH\u1eeeA L\u00c0NH",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  16: {
    title: "MAP 16 \u2014 KHI T\u1ed4N TH\u01af\u01a0NG M\u1ed6I TH\u00c0NH VI\u00caN TH\u01af\u1edcNG PH\u1ea2N \u1ee8NG NH\u01af TH\u1ebe N\u00c0O?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  17: {
    title: "MAP 17 \u2014 \u0110I\u1ec0U KHI\u1ebeN C\u00c1C TH\u00c0NH VI\u00caN D\u1ec4 VA CH\u1ea0M C\u1ea2M X\u00daC NH\u1ea4T",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  18: {
    title: "MAP 18 \u2014 V\u00cc SAO M\u1ed6I NG\u01af\u1edcI C\u00d3 NHU C\u1ea6U Y\u00caU TH\u01af\u01a0NG KH\u00c1C NHAU?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  19: {
    title: "MAP 19 \u2014 \u0110I\u1ec0U KHI\u1ebeN GI\u00c1 \u0110\u00ccNH N\u00c0Y KH\u00d3 N\u00d3I CHUY\u1ec6N TH\u1eacT L\u00d2NG V\u1edaI NHAU",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  20: {
    title: "MAP 20 \u2014 V\u00cc SAO C\u00c0NG GI\u1ea2I TH\u00cdCH C\u00c0NG D\u1ec4 T\u1ed4N TH\u01af\u01a0NG?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  21: {
    title: "MAP 21 \u2014 \u0110I\u1ec0U KHI\u1ebeN C\u00c1C TH\u00c0NH VI\u00caN D\u1ec4 PH\u00d2NG TH\u1ee6 C\u1ea2M X\u00daC",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  22: {
    title: "MAP 22 \u2014 KI\u1ec2U NHU C\u1ea6U C\u1ea2M X\u00daC \u0110ANG KH\u00c1C NHAU TRONG GIA \u0110\u00ccNH",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  23: {
    title: "MAP 23 \u2014 \u0110I\u1ec0U KHI\u1ebeN M\u1ed8T TH\u00c0NH VI\u00caN LU\u00d4N C\u1ea2M TH\u1ea4Y THI\u1ebeU AN TO\u00c0N TRONG M\u00c1I NH\u00c0 N\u00c0Y",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  24: {
    title: "MAP 24 \u2014 \u0110I\u1ec0U KHI\u1ebeN C\u00c1C TH\u00c0NH VI\u00caN D\u1ec4 C\u1ea2M TH\u1ea4Y KH\u00d4NG \u0110\u01af\u1ee2C GHI NH\u1eacN",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  25: {
    title: "MAP 25 \u2014 \u0110I\u1ec0U KHI\u1ebeN GIA \u0110\u00ccNH N\u00c0Y LU\u00d4N L\u1eb6P L\u1ea0I C\u00d9NG M\u1ed8T KI\u1ec2U XUNG \u0110\u1ed8T",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  26: {
    title: "MAP 26 \u2014 KHI \u00c1P L\u1ef0C M\u1ed6I NG\u01af\u1edcI TR\u1ede TH\u00c0NH PHI\u00caN B\u1ea2N N\u00c0O?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  27: {
    title: "MAP 27 \u2014 \u0110I\u1ec0U GIA \u0110\u00ccNH G\u1ed0C C\u1ee6A CHA M\u1eb8 \u0110ANG \u1ea2NH H\u01af\u1edaNG L\u00caN CON C\u00c1I HI\u1ec6N T\u1ea0I",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  28: {
    title: "MAP 28 \u2014 KI\u1ec2U T\u1ed4N TH\u01af\u01a0NG TU\u1ed4I TH\u01a0 \u0110ANG \u0110\u01af\u1ee2C L\u1eb6P L\u1ea0I TRONG GIA \u0110\u00ccNH N\u00c0Y",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  29: {
    title: "MAP 29 \u2014 V\u00cc SAO M\u1eccI NG\u01af\u1edcI Y\u00caU NHAU NH\u01afNG V\u1eaaN D\u1ec4 L\u00c0M \u0110AU NHAU?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  30: {
    title: "MAP 30 \u2014 \u0110I\u1ec0U GI\u00c1 \u0110\u00ccNH N\u00c0Y \u0110ANG V\u00d4 TH\u1ee8C TRUY\u1ec0N TI\u1ebeP CHO TH\u1ebe H\u1ec6 SAU",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  31: {
    title: "MAP 31 \u2014 GI\u00c1 \u0110\u00ccNH N\u00c0Y \u0110ANG L\u00c0M M\u1ed8T TH\u00c0NH VI\u00caN KI\u1ec6T S\u1ee8C \u0110I\u1ec0U G\u00cc?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  32: {
    title: "MAP 32 \u2014 \u0110I\u1ec0U KHI\u1ebeN M\u1ed8T NG\u01af\u1edcI D\u1ea6N \u0110\u00c1NH M\u1ea4T CH\u00cdNH M\u00ccNH TRONG GIA \u0110\u00ccNH",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  33: {
    title: "MAP 33 \u2014 V\u00cc SAO M\u1eccI NG\u01af\u1edcI NG\u00c0Y C\u00c0NG S\u1ed0NG B\u1eb0NG VAI TR\u00d2 H\u01a0N C\u1ea2M X\u00daC?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  34: {
    title: "MAP 34 \u2014 \u0110I\u1ec0U KHI\u1ebeN M\u1ed8T NG\u01af\u1edcI LU\u00d4N C\u1ea2M TH\u1ea4Y M\u00ccNH PH\u1ea2I C\u1ed0 NHI\u1ec0U H\u01a0N",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  35: {
    title: "MAP 35 \u2014 \u0110I\u1ec0U KHI\u1ebeN GI\u00c1 \u0110\u00ccNH N\u00c0Y KH\u00d3 C\u1ea2M TH\u1ea4Y H\u1ea0NH PH\u00daC TH\u1eacT S\u1ef0",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  36: {
    title: "MAP 36 \u2014 V\u00cc SAO C\u00c1C TH\u00c0NH VI\u00caN D\u1ec4 C\u1ea0N N\u0102NG L\u01af\u1ee2NG C\u1ea2M X\u00daC?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  37: {
    title: "MAP 37 \u2014 \u0110I\u1ec0U CON C\u00c1I \u0110ANG \u00c2M TH\u1ea6M H\u1ea4P TH\u1ee4 T\u1eea GIA \u0110\u00ccNH N\u00c0Y",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  38: {
    title: "MAP 38 \u2014 KI\u1ec2U TR\u01af\u1edcNG N\u0102NG L\u01af\u1ee2NG M\u00c0 M\u00c1I NH\u00c0 N\u00c0Y \u0110ANG T\u1ea0O RA",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  39: {
    title: "MAP 39 \u2014 \u0110I\u1ec0U KHI\u1ebeN C\u00c1C TH\u00c0NH VI\u00caN KH\u00d3 T\u00ccM L\u1ea0I C\u1ea2M GI\u00c1C B\u00ccNH Y\u00caN KHI \u1ede C\u1ea0NH NHAU",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  40: {
    title: "MAP 40 \u2014 V\u00cc SAO M\u1eccI NG\u01af\u1edcI B\u1eaeT \u0110\u1ea6U M\u1ea4T NI\u1ec0M TIN V\u00c0O K\u1ebeT N\u1ed0I GIA \u0110\u00ccNH?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  41: {
    title: "MAP 41 \u2014 \u0110I\u1ec0U KHI\u1ebeN C\u00c1C TH\u00c0NH VI\u00caN D\u1ea6N KH\u00d4NG C\u00d2N MU\u1ed0N M\u1ede L\u00d2NG N\u1eeeA",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  42: {
    title: "MAP 42 \u2014 \u0110I\u1ec0U GIA \u0110\u00ccNH N\u00c0Y \u0110ANG C\u1ed0 D\u1ea0Y M\u1eccI NG\u01af\u1edcI TR\u01af\u1edeNG TH\u00c0NH",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  43: {
    title: "MAP 43 \u2014 \u0110I\u1ec0U KHI\u1ebeN C\u00c1C TH\u00c0NH VI\u00caN V\u00c3N CH\u01afA TH\u1ec2 TH\u1eacT S\u1ef0 CH\u1eeeA L\u00c0NH",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  44: {
    title: "MAP 44 \u2014 \u0110I\u1ec0U M\u1eccI NG\u01af\u1edcI \u0110ANG V\u00d4 TH\u1ee8C T\u1ef0 L\u00c0M \u0110AU CH\u00cdNH M\u00ccNH V\u00c0 NHAU",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  45: {
    title: "MAP 45 \u2014 \u0110I\u1ec0U GIA \u0110\u00ccNH N\u00c0Y TH\u1eacT S\u1ef0 C\u1ea6N HI\u1ec2U \u0110\u1ec2 THAY \u0110\u1ed4I",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  46: {
    title: "MAP 46 \u2014 \u0110I\u1ec0U GIA \u0110\u00ccNH N\u00c0Y C\u1ea6N CH\u1eeeA L\u00c0NH NH\u1ea4T L\u00daC N\u00c0Y",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  47: {
    title: "MAP 47 \u2014 \u0110I\u1ec0U C\u00c1C TH\u00c0NH VI\u00caN C\u1ea6N H\u1eccC \u0110\u1ec2 Y\u00caU TH\u01af\u01a0NG NHAU TR\u01af\u1edeNG TH\u00c0NH H\u01a0N",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  48: {
    title: "MAP 48 \u2014 \u0110I\u1ec0U C\u1ea2 GIA \u0110\u00ccNH C\u1ea6N BU\u00d4NG B\u1ece \u0110\u1ec2 NH\u1eb8 L\u00d2NG H\u01a0N",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  49: {
    title: "MAP 49 \u2014 \u0110I\u1ec0U GIA \u0110\u00ccNH N\u00c0Y C\u1ea6N NG\u1eeaNG L\u00c0M \u0110\u1ec2 KH\u00d4NG TI\u1ebeP T\u1ee4C T\u1ea0O T\u1ed4N TH\u01af\u01a0NG",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  50: {
    title: "MAP 50 \u2014 \u0110I\u1ec0U C\u00c1C TH\u00c0NH VI\u00caN C\u1ea6N THA TH\u1ee8 CHO NHAU V\u00c0 CHO CH\u00cdNH M\u00ccNH",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  51: {
    title: "MAP 51 \u2014 \u0110I\u1ec0U GI\u00daP GI\u00c1 \u0110\u00ccNH N\u00c0Y X\u00c2Y L\u1ea0I C\u1ea2M GI\u00c1C AN TO\u00c0N C\u1ea2M X\u00daC",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  52: {
    title: "MAP 52 \u2014 KHI N\u00c0O H\u00c0NH TR\u00ccNH X\u00c2Y D\u1ef0NG GIA \u0110\u00ccNH CH\u1eeeA L\u00c0NH TH\u1eacT S\u1ef0 B\u1eaeT \u0110\u1ea6U?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  53: {
    title: "MAP 53 \u2014 \u0110I\u1ec0U GI\u00daP C\u00c1C TH\u00c0NH VI\u00caN KH\u00d4NG C\u00d2N S\u1ed0NG TRONG PH\u00d2NG TH\u1ee6 C\u1ea2M X\u00daC",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  54: {
    title: "MAP 54 \u2014 \u0110I\u1ec0U GI\u00daP M\u1eccI NG\u01af\u1edcI K\u1ebeT N\u1ed0I L\u1ea0I TH\u1eacT S\u1ef0 T\u1eea B\u00caN TRONG",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  55: {
    title: "MAP 55 \u2014 \u0110I\u1ec0U GI\u00daP GI\u00c1 \u0110\u00ccNH H\u1eccC C\u00c1CH L\u1eaeNG NGHE V\u00c0 TH\u1ea4U HI\u1ec2U NHAU H\u01a0N",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  56: {
    title: "MAP 56 \u2014 \u0110I\u1ec0U GI\u00daP M\u00c1I NH\u00c0 N\u00c0Y TR\u1ede TH\u00c0NH N\u01a0I CH\u1eeeA L\u00c0NH TH\u1eacT S\u1ef0",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  57: {
    title: "MAP 57 \u2014 \u0110I\u1ec0U GI\u00daP GI\u00c1 \u0110\u00ccNH THO\u00c1T KH\u1eceI M\u00d4 TH\u1ee8C T\u1ed4N TH\u01af\u01a0NG TRUY\u1ec0N \u0110\u1edcI",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  58: {
    title: "MAP 58 \u2014 PHI\u00caN B\u1ea2N GIA \u0110\u00ccNH B\u00ccNH Y\u00caN V\u00c0 CH\u1eeeA L\u00c0NH NH\u1ea4T S\u1ebc NH\u01af TH\u1ebe N\u00c0O?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  59: {
    title: "MAP 59 \u2014 H\u00c0NH TR\u00ccNH TR\u01af\u1edeNG TH\u00c0NH TH\u1eacT S\u1ef0 M\u00c0 GIA \u0110\u00ccNH N\u00c0Y \u0110ANG C\u00d9NG NHAU \u0110I QUA L\u00c0 G\u00cc?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  },
  60: {
    title: "MAP 60 \u2014 PHI\u00caN B\u1ea2N GIA \u0110\u00ccNH Y\u00caU TH\u01af\u01a0NG, K\u1ebeT N\u1ed0I V\u00c0 CH\u1eeeA L\u00c0NH S\u00c2U S\u1eaeC NH\u1ea4T S\u1ebc TR\u1ede TH\u00c0NH G\u00cc?",
    subtitle: "\u0110\u1ecdc th\u1eed MAP x\u00e2y d\u1ef1ng gia \u0111\u00ecnh ch\u1eefa l\u00e0nh.",
    tags: ["ch\u1eefa l\u00e0nh","gia \u0111\u00ecnh","k\u1ebft n\u1ed1i","th\u1ea5u hi\u1ec3u"]
  }
};

export const maps = makeMaps("healing-family").map((map) => {
  const preview = previewOverrides[map.number];
  if (!preview) return map;

  return {
    ...map,
    title: preview.title,
    subtitle: preview.subtitle,
    hasPreview: true,
    previewModule: `category-healing-family-map-${map.number}`,
    tags: preview.tags
  };
});


