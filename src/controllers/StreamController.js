list = [];

exports.post = async (req, res, next) => {
    if (req.body.url != "" && list.indexOf(req.body.url) == -1) {
        list.push(req.body.url);
        Stream = require("node-rtsp-stream");
        stream = await new Stream({
            name: "Camera Pipeline",
            // streamUrl: "rtsp://YOUR_IP:PORT",
            streamUrl: req.body.url,
            // streamUrl: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
            wsPort: 7000,
            ffmpegOptions: { // options ffmpeg flags
                "-f": "mpegts", // output file format.
                "-codec:v": "mpeg1video", // video codec
                "-b:v": "1000k", // video bit rate
                "-stats": "",
                "-r": 25, // frame rate
                "-s": "640x480", // video size
                "-bf": 0,
                // transport
                "-rtsp_transport": "tcp",
                // audio
                "-codec:a": "mp2", // audio codec
                "-ar": 44100, // sampling rate (in Hz)(in Hz)
                "-ac": 1, // number of audio channels
                "-b:a": "128k", // audio bit rate
            },
        });
    }
    res.status(201).send();
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Rota PUT com ID! --> ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Rota DELETE com ID! --> ${id}`);
};

exports.get = (req, res, next) => {
  res.status(200).send('Rota GET!');
};

exports.getById = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Rota GET com ID! ${id}`);
};