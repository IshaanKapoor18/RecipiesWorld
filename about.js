let a = new SpeechSynthesisUtterance("Welcome to Our About Section");
speechSynthesis.speak(a);

let utterance = new SpeechSynthesisUtterance("We just make your lifestyle easier by helping you with our simple tricks to cook. Even if you don’t know how to cook! Don’t worry we are here to help you . With our website you can be the best chef of your kitchen. Here you will get a dectivative assistant which will help you throughou you cooking and will instruct you every single step in detail.");
speechSynthesis.speak(utterance);

utterance = new SpeechSynthesisUtterance("I will be helping you to lear and cook!!");
speechSynthesis.speak(utterance);

function end()
{speechSynthesis.cancel();}