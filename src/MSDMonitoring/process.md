---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/developers/config.html
---
# MSD 생산 모니터링 
생산공정에서 생산된 제품을 실시간 모니터링 시스템을 도입하여 공정 효율성 증가와 장비와 센서에서 발생하는 데이터를 실시간으로 통신하여 공정상황을 한눈에 파악할 수 있습니다.

## 1️⃣ 시연 영상

<iframe 
  width="688" 
  height="365" 
  src="https://www.youtube.com/embed/09i1BvOvtYE?si=LktMAvwW_nYx2Tw2" 
  title="생산 모니터링" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>
<br/>
<video controls width="688" height="365">
  <source src="./video/생산계획.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


## 2️⃣ 주요 화면 및 기능
![이미지 설명](/images/myimages.png)
### 🖥️ 주요 설정
1. 생산 공정 실시간 모니터링
    - 각 공정 단계별 상태를 실시간으로 확인할 수 있는 대시보드 제공.
    - 센서 데이터, 장비 상태 및 작업 진행 상황을 시각화.
2. MQTT 기반 데이터 통신
    - RabbitMQ를 메시지 브로커로 사용하여 실시간 데이터의 발행(Publish) 및 구독(Subscribe) 기능 구현.
    - 데이터 전송 지연을 최소화하여 생산 라인의 신속한 의사결정을 지원.


