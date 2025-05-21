# FunASR

[阿里巴巴语音识别funasr的android部署](https://blog.csdn.net/xiaommianyang/article/details/136040456)  
[modelscope-funasr本地部署到安卓](https://developer.aliyun.com/ask/588391) 
[FunASR](https://github.com/modelscope/FunASR)  
[funasr-android](https://github.com/jianyangshi/funasr-android/tree/master)  
[UniASR语音识别-闽南语-通用-16k](https://www.modelscope.cn/models/iic/speech_UniASR_asr_2pass-minnan-16k-common-vocab3825)  

[sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx)  
[Releases/asr-models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/asr-models)  
[Releases/tts-models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/tts-models)  
[speech-enhancement-models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/speech-enhancement-models)  
[speaker-recongition-models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/speaker-recongition-models)  
[speaker-segmentation-models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/speaker-segmentation-models)  
[Text-to-speech (TTS)](https://huggingface.co/spaces/k2-fsa/text-to-speech)  
[Automatic Speech Recognition](https://huggingface.co/spaces/k2-fsa/automatic-speech-recognition)  
[Generate subtitles for videos](https://huggingface.co/spaces/k2-fsa/generate-subtitles-for-videos)  
[Speaker diarization](https://huggingface.co/spaces/k2-fsa/speaker-diarization)  
[ModelScope csukuangfj](https://modelscope.cn/profile/?tab=studio)  

[VITS](https://huggingface.co/docs/transformers/model_doc/vits)  
[facebook/mms-tts-nan](https://huggingface.co/facebook/mms-tts-nan)  
[csukuangfj/vits-mms-nan](https://huggingface.co/csukuangfj/vits-mms-nan)  


[TSukiLen/whisper-medium-chinese-tw-minnan](https://huggingface.co/TSukiLen/whisper-medium-chinese-tw-minnan)  
[TSukiLen/whisper-small-chinese-tw-minnan](https://huggingface.co/TSukiLen/whisper-small-chinese-tw-minnan)  

生成的音频

```python
import torch
from transformers import VitsTokenizer, VitsModel, set_seed

tokenizer = VitsTokenizer.from_pretrained("facebook/mms-tts-nan")
model = VitsModel.from_pretrained("facebook/mms-tts-nan")

inputs = tokenizer(text="wo shi shui", return_tensors="pt")

# set_seed(555)

with torch.no_grad():
   outputs = model(**inputs)

waveform = outputs.waveform[0]
```

保存

```python
import torchaudio

# 保存为 WAV 文件（默认采样率 16kHz）
torchaudio.save("output.wav", waveform.unsqueeze(0), model.config.sampling_rate)
```

