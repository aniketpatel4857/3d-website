import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const canva2 = document.getElementById('canvas');
const canvas4d = document.getElementById('canvas4d');
const canvas5d = document.getElementById('canvas5d')
const app = new Application(canvas);
app.load('https://prod.spline.design/Up4SN-7rIuNl0ul6/scene.splinecode');
const app2 = new Application(canva2);
app2.load('https://prod.spline.design/gPBd0HNwWzl5nG9N/scene.splinecode');
const app3 = new Application(canvas4d);
app3.load('https://prod.spline.design/rV0bPepm7HPhv3Gg/scene.splinecode');
const app4 = new Application(canvas5d)
app4.load('https://prod.spline.design/4uWDR6gbVwVtvTTc/scene.splinecode')
