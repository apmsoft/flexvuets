import Prism from 'prism-es6';

const onReady = () : void =>
{
    // if you are intending to use Prism functions manually, you will need to set:
    Prism.manual = true;

    Prism.highlightAll();
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
