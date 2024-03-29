<?php

/* WebProfilerBundle:Profiler:toolbar_style.html.twig */
class __TwigTemplate_63870ae0f4780b6d1bd480e957d412c6 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<style type=\"text/css\">
    .sf-minitoolbar {
        display: none;

        position: fixed;
        bottom: 0;
        right: 0;

        padding: 5px 5px 0;

        background-color: #f7f7f7;
        background-image: -moz-linear-gradient(top, #e4e4e4, #ffffff);
        background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#e4e4e4), to(#ffffff));
        background-image: -o-linear-gradient(top, #e4e4e4, #ffffff);
        background: linear-gradient(top, #e4e4e4, #ffffff);

        -moz-border-radius: 16px 0 0 0;
        -webkit-border-radius: 16px 0 0 0;
        border-radius: 16px 0 0 0;

        z-index: 6000000;
    }

    .sf-toolbarreset {
        position: fixed;
        background-color: #f7f7f7;
        left: 0;
        right: 0;
        height: 38px;
        margin: 0;
        padding: 0 40px 0 0;
        z-index: 6000000;
        font: 11px Verdana, Arial, sans-serif;
        text-align: left;
        color: #2f2f2f;

        background-image: -moz-linear-gradient(top, #e4e4e4, #ffffff);
        background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#e4e4e4), to(#ffffff));
        background-image: -o-linear-gradient(top, #e4e4e4, #ffffff);
        background: linear-gradient(top, #e4e4e4, #ffffff);

        bottom: 0;
        border-top: 1px solid #bbb;
    }
    .sf-toolbarreset span,
    .sf-toolbarreset div {
        font-size: 11px;
    }
    .sf-toolbarreset img {
        width: auto;
        display: inline;
    }

    .sf-toolbarreset .hide-button {
        display: block;
        position: absolute;
        top: 12px;
        right: 10px;
        width: 15px;
        height: 15px;
        cursor: pointer;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAllBMVEXDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PExMTPz8/Q0NDR0dHT09Pb29vc3Nzf39/h4eHi4uLj4+P6+vr7+/v8/Pz9/f3///+Nh2QuAAAAIXRSTlMABgwPGBswMzk8QktRV4SKjZOWmaKlq7TAxszb3urt+fy1vNEpAAAAiklEQVQIHUXBBxKCQBREwRFzDqjoGh+C2YV//8u5Sll2S0E/dof1tKdKM6GyqCto7PjZRJIS/mbSELgXOSd/BzpKIH1ZefVWpDDTHsi8mZVnwImPi5ndCLbaAZk3M58Bay0h9VbeSvMpjDUAHj4jL55AW1rxN5fU2PLjIgVRzNdxVFOlGzvnJi0Fb1XNGBHA9uQOAAAAAElFTkSuQmCC');
    }

    .sf-toolbar-block {
        white-space: nowrap;
        color: #2f2f2f;
        display: block;
        min-height: 28px;
        border-right: 1px solid #e4e4e4;
        padding: 0;
        float: left;
        cursor: default;
    }

    .sf-toolbar-block span {
        display: inline-block;
    }

    .sf-toolbar-block .sf-toolbar-info-piece {
        padding-bottom: 5px;
    }

    .sf-toolbar-block .sf-toolbar-info-piece:last-child {
        padding-bottom: 0;
    }

    .sf-toolbar-block .sf-toolbar-info-piece a,
    .sf-toolbar-block .sf-toolbar-info-piece abbr {
        color: #2f2f2f;
    }

    .sf-toolbar-block .sf-toolbar-info-piece b {
        display: inline-block;
        width: 110px;
    }

    .sf-toolbar-block .sf-toolbar-info-with-next-pointer:after {
        content: ' :: ';
        color: #999;
    }

    .sf-toolbar-block .sf-toolbar-info-with-delimiter {
        border-right: 1px solid #999;
        padding-right: 5px;
        margin-right: 5px;
    }

    .sf-toolbar-block .sf-toolbar-info {
        display: none;
        position: absolute;
        background-color: #fff;
        border: 1px solid #bbb;
        padding: 10px 8px;
        margin-left: -1px;

        bottom: 38px;
        border-bottom-width: 0;
    }

    .sf-toolbar-block .sf-toolbar-info:empty {
        visibility: hidden;
    }

    .sf-toolbar-block .sf-toolbar-status {
        display: inline-block;
        color: #fff;
        background-color: #666;
        padding: 3px 6px;
        border-radius: 3px;
        margin-bottom: 2px;
        vertical-align: middle;
        min-width: 6px;
        min-height: 13px;
    }

    .sf-toolbar-block .sf-toolbar-status abbr {
        color: #fff;
        border-bottom: 1px dotted black;
    }

    .sf-toolbar-block .sf-toolbar-status-green {
        background-color: #759e1a;
    }

    .sf-toolbar-block .sf-toolbar-status-red {
        background-color: #a33;
    }

    .sf-toolbar-block .sf-toolbar-status-yellow {
        background-color: #ffcc00;
        color: #000;
    }

    .sf-toolbar-block .sf-toolbar-status-black {
        background-color: #000;
    }

    .sf-toolbar-block .sf-toolbar-icon {
        display: block;
    }

    .sf-toolbar-block .sf-toolbar-icon > a,
    .sf-toolbar-block .sf-toolbar-icon > span {
        display: block;
        text-decoration: none;
        margin: 0;
        padding: 5px 8px;
        min-width: 20px;
        text-align: center;
        vertical-align: middle;
    }

    .sf-toolbar-block .sf-toolbar-icon > a,
    .sf-toolbar-block .sf-toolbar-icon > a:link
    .sf-toolbar-block .sf-toolbar-icon > a:hover {
        color: black !important;
    }

    .sf-toolbar-block .sf-toolbar-icon img {
        border-width: 0;
        vertical-align: middle;
    }

    .sf-toolbar-block .sf-toolbar-icon img + span {
        margin-left: 5px;
        margin-top: 2px;
    }

    .sf-toolbar-block .sf-toolbar-icon .sf-toolbar-status {
        border-radius: 12px;
        border-bottom-left-radius: 0;
        margin-top: 0;
    }

    .sf-toolbar-block .sf-toolbar-info-method {
        border-bottom: 1px dashed #ccc;
        cursor: help;
    }

    .sf-toolbar-block .sf-toolbar-info-method[onclick=\"\"] {
        border-bottom: none;
        cursor: inherit;
    }

    .sf-toolbar-info-php {}
    .sf-toolbar-info-php-ext {}

    .sf-toolbar-info-php-ext .sf-toolbar-status {
        margin-left: 2px;
    }

    .sf-toolbar-info-php-ext .sf-toolbar-status:first-child {
        margin-left: 0;
    }

    .sf-toolbar-block a .sf-toolbar-info-piece-additional,
    .sf-toolbar-block a .sf-toolbar-info-piece-additional-detail {
        display: inline-block;
    }

    .sf-toolbar-block a .sf-toolbar-info-piece-additional:empty,
    .sf-toolbar-block a .sf-toolbar-info-piece-additional-detail:empty {
        display: none;
    }

    .sf-toolbarreset:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0 0 50px;
    }

    .sf-toolbar-block:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0 0 5px;
    }

    .sf-toolbar-block:hover .sf-toolbar-icon {
        background-color: #fff;
    }
    .sf-toolbar-block:hover .sf-toolbar-info {
        display: block;
    }

    /***** Override the setting when the toolbar is on the top *****/
    ";
        // line 243
        if (($this->getContext($context, "position") == "top")) {
            // line 244
            echo "        .sf-minitoolbar {
            top: 0;
            bottom: auto;
            right: 0;

            background-color: #f7f7f7;

            background-image: -moz-linear-gradient(225deg, #e4e4e4, #ffffff);
            background-image: -webkit-gradient(linear, 100% 0%, 0% 0%, from(#e4e4e4), to(#ffffff));
            background-image: -o-linear-gradient(135deg, #e4e4e4, #ffffff);
            background: linear-gradient(225deg, #e4e4e4, #ffffff);

            -moz-border-radius: 0 0 0 16px;
            -webkit-border-radius: 0 0 0 16px;
            border-radius: 0 0 0 16px;
        }

        .sf-toolbarreset {
            background-image: -moz-linear-gradient(225deg, #e4e4e4, #ffffff);
            background-image: -webkit-gradient(linear, 100% 0%, 0% 0%, from(#e4e4e4), to(#ffffff));
            background-image: -o-linear-gradient(135deg, #e4e4e4, #ffffff);
            background: linear-gradient(225deg, #e4e4e4, #ffffff);

            top: 0;
            bottom: auto;
            border-bottom: 1px solid #bbb;
        }

        .sf-toolbar-block .sf-toolbar-info {
            top: 39px;
            bottom: auto;
            border-top-width: 0;
            border-bottom: 1px solid #bbb;
        }
    ";
        }
        // line 279
        echo "
    ";
        // line 280
        if ((!$this->getContext($context, "floatable"))) {
            // line 281
            echo "        .sf-toolbarreset {
            position: static;
            background: #cbcbcb;

            background-image: -moz-linear-gradient(90deg, #cbcbcb, #e8e8e8); !important;
            background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, from(#cbcbcb), to(#e8e8e8)); !important;
            background-image: -o-linear-gradient(180deg, #cbcbcb, #e8e8e8); !important;
            background: linear-gradient(90deg, #cbcbcb, #e8e8e8); !important;
        }

        .sf-toolbarreset abbr {
            border-bottom: 1px dotted #000000;
            cursor: help;
        }
    ";
        }
        // line 296
        echo "
    /***** Media query *****/
    @media screen and (max-width: 779px) {
        .sf-toolbar-block .sf-toolbar-icon > * > :first-child ~ * {
            display: none;
        }

        .sf-toolbar-block .sf-toolbar-icon > * > .sf-toolbar-info-piece-additional,
        .sf-toolbar-block .sf-toolbar-icon > * > .sf-toolbar-info-piece-additional-detail {
            display: none !important;
        }
    }

    @media screen and (min-width: 880px) {
        .sf-toolbar-block .sf-toolbar-icon a[href\$=\"config\"] .sf-toolbar-info-piece-additional {
            display: inline-block;
        }
    }

    @media screen and (min-width: 980px) {
        .sf-toolbar-block .sf-toolbar-icon a[href\$=\"security\"] .sf-toolbar-info-piece-additional {
            display: inline-block;
        }
    }

    @media screen and (max-width: 1179px) {
        .sf-toolbar-block .sf-toolbar-icon > * > .sf-toolbar-info-piece-additional {
            display: none;
        }
    }

    @media screen and (max-width: 1439px) {
        .sf-toolbar-block .sf-toolbar-icon > * > .sf-toolbar-info-piece-additional-detail {
            display: none;
        }
    }
</style>
";
    }

    public function getTemplateName()
    {
        return "WebProfilerBundle:Profiler:toolbar_style.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  322 => 296,  303 => 280,  263 => 244,  261 => 243,  103 => 45,  22 => 3,  17 => 1,  305 => 281,  296 => 97,  291 => 95,  277 => 87,  274 => 86,  267 => 82,  253 => 81,  249 => 79,  234 => 77,  208 => 68,  198 => 64,  187 => 62,  153 => 53,  124 => 48,  116 => 44,  107 => 36,  92 => 29,  142 => 51,  127 => 49,  110 => 37,  76 => 24,  155 => 54,  134 => 44,  131 => 51,  55 => 11,  32 => 5,  29 => 4,  789 => 471,  786 => 470,  775 => 468,  771 => 467,  767 => 465,  754 => 464,  728 => 459,  725 => 458,  706 => 456,  689 => 455,  685 => 453,  681 => 452,  677 => 451,  673 => 450,  669 => 449,  665 => 448,  662 => 447,  660 => 446,  643 => 445,  632 => 444,  617 => 439,  612 => 437,  608 => 436,  605 => 435,  591 => 434,  554 => 399,  536 => 396,  519 => 395,  516 => 394,  514 => 393,  509 => 391,  504 => 389,  192 => 90,  177 => 85,  159 => 79,  157 => 78,  144 => 72,  140 => 50,  135 => 69,  122 => 59,  115 => 42,  97 => 43,  83 => 25,  51 => 22,  43 => 12,  26 => 3,  203 => 93,  176 => 66,  168 => 60,  130 => 47,  100 => 30,  88 => 36,  79 => 25,  202 => 65,  189 => 63,  183 => 68,  165 => 64,  162 => 80,  151 => 54,  145 => 53,  136 => 47,  132 => 54,  125 => 52,  120 => 37,  93 => 33,  89 => 40,  85 => 35,  82 => 25,  47 => 13,  25 => 4,  75 => 27,  69 => 18,  66 => 19,  60 => 16,  56 => 16,  54 => 23,  42 => 10,  386 => 160,  383 => 159,  377 => 158,  375 => 157,  368 => 156,  364 => 155,  360 => 153,  358 => 152,  355 => 151,  352 => 150,  350 => 149,  342 => 147,  340 => 146,  337 => 145,  328 => 140,  325 => 139,  318 => 135,  312 => 131,  309 => 130,  306 => 129,  304 => 128,  299 => 98,  290 => 120,  287 => 119,  285 => 118,  280 => 88,  278 => 114,  273 => 111,  271 => 110,  266 => 107,  262 => 105,  256 => 103,  252 => 101,  245 => 97,  238 => 93,  232 => 89,  229 => 88,  224 => 74,  219 => 72,  213 => 79,  210 => 78,  207 => 73,  205 => 76,  200 => 92,  194 => 69,  191 => 68,  188 => 67,  186 => 87,  181 => 60,  175 => 59,  172 => 67,  169 => 62,  167 => 82,  160 => 57,  141 => 48,  128 => 42,  105 => 49,  101 => 25,  95 => 23,  86 => 26,  80 => 24,  77 => 23,  74 => 17,  71 => 26,  65 => 19,  59 => 22,  45 => 9,  34 => 5,  68 => 20,  61 => 16,  44 => 7,  37 => 9,  20 => 2,  248 => 136,  178 => 67,  174 => 84,  164 => 59,  161 => 58,  158 => 59,  148 => 52,  143 => 57,  137 => 45,  121 => 35,  118 => 50,  113 => 43,  109 => 32,  106 => 31,  104 => 35,  99 => 33,  96 => 41,  94 => 31,  90 => 37,  78 => 33,  72 => 32,  62 => 14,  53 => 9,  50 => 14,  48 => 10,  41 => 9,  39 => 8,  35 => 8,  30 => 4,  27 => 3,  354 => 163,  345 => 160,  341 => 159,  338 => 158,  333 => 157,  331 => 141,  323 => 138,  321 => 149,  314 => 145,  307 => 141,  300 => 279,  293 => 96,  286 => 92,  279 => 125,  272 => 85,  257 => 109,  250 => 100,  243 => 96,  236 => 97,  226 => 75,  223 => 88,  215 => 71,  212 => 82,  209 => 81,  204 => 78,  201 => 77,  196 => 69,  190 => 72,  182 => 70,  180 => 86,  170 => 64,  163 => 58,  156 => 58,  152 => 75,  149 => 53,  146 => 73,  138 => 42,  133 => 47,  129 => 42,  126 => 45,  123 => 44,  117 => 36,  114 => 35,  111 => 40,  108 => 50,  102 => 36,  98 => 24,  91 => 41,  87 => 26,  84 => 29,  81 => 28,  73 => 23,  70 => 22,  67 => 25,  64 => 24,  58 => 12,  52 => 10,  49 => 10,  46 => 8,  40 => 7,  36 => 6,  33 => 8,  31 => 4,  28 => 3,);
    }
}
