const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const path = require('path');

const Config = {
    followNewTab: true,
    fps: 25,
    ffmpeg_Path: 'ffmpeg' || null,
    videoFrame: {
      width: 1024,
      height: 768,
    },
    videoCrf: 18,
    videoCodec: 'libx264',
    videoPreset: 'ultrafast',
    videoBitrate: 1000,
    autopad: {
      color: 'black' | '#35A5FF',
    },
    aspectRatio: '4:3',
  };

(async () => {
    const config = {
        followNewTab: true,
        fps: 25,
        ffmpeg_Path: 'ffmpeg' || null,
        videoFrame: {
          width: 1024,
          height: 768,
        },
        videoCrf: 18,
        videoCodec: 'libx264',
        videoPreset: 'ultrafast',
        videoBitrate: 1000,
        autopad: {
          color: 'black' | '#35A5FF',
        },
        aspectRatio: '4:3',
      };
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const recorder = new PuppeteerScreenRecorder(page,config);
    await page.setViewport({ width: 1280, height: 720 });

    // Resolve the absolute path to the HTML file
    const filePath = path.resolve('animation.html');
    console.log('Resolved file path:', filePath); // Print the resolved file path
    const fileUrl = `file://${filePath}`; // Convert to file URL
    await recorder.start(`./output.mp4`); // start recording

    await page.goto(fileUrl);


    await recorder.stop();
    await browser.close();
})();
