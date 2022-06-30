Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "Camera Pipeline",
  // streamUrl: "rtsp://YOUR_IP:PORT",
  streamUrl: "rtsp://rtsp.stream/pattern",
  // streamUrl: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
  wsPort: 7000,
  ffmpegOptions: { // options ffmpeg flags
    "-f": "mpegts", // output file format.
    "-codec:v": "mpeg1video", // video codec
    "-b:v": "1000k", // video bit rate
    "-stats": "",
    "-r": 25, // frame rate
    "-s": "160x280", // video size
    "-bf": 0,
    // transport
    "-rtsp_transport": "udp",
    // audio
    "-codec:a": "mp2", // audio codec
    "-ar": 44100, // sampling rate (in Hz)(in Hz)
    "-ac": 1, // number of audio channels
    "-b:a": "128k", // audio bit rate
  },
});
