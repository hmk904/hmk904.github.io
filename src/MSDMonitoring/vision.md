---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/developers/config.html
---
# MSD 비전 모니터링 
비전 공정을 활용한 실시간 불량품 모니터링 시스템을 도입하여 공정 효율성을 극대화하고, 불량품을 즉각 감지하여 신속한 조치를 가능하게 합니다. 이를 통해 생산 품질을 향상시키고, 불량 발생 원인을 실시간으로 분석하여 최적의 공정 개선을 지원합니다. 또한, 데이터 기반의 불량 패턴 분석을 통해 사전 예방 조치를 강화하고, 생산 라인의 안정성을 극대화할 수 있습니다

## 1️⃣ 시연 영상
<iframe 
  width="688" 
  height="365" 
  src="https://www.youtube.com/embed/fpd7r-BLa5Y?si=s5jnJuXijTBoygDE" title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>

## 2️⃣ 주요 화면 및 기능
![비전 실시간 모니터링](/images/vision1.png)
### 📌주요 설정
1. 비전 공정 실시간 모니터링
    - 각 공정 단계(투입, 비전 검사 완료)를 실시간으로 확인할 수 있는 대시보드 제공.
    - 컨베이어 벨트의 비전 카메라를 통해 이미지 데이터를 실시간으로 수집 및 처리.
    - AI 기반 이미지 분석을 활용하여 불량 유형을 즉각 판별하고, 실시간 불량 정보를 제공하여 신속한 대응 가능.
2. MQTT 기반 데이터 통신
    - RabbitMQ를 메시지 브로커로 사용하여 실시간 데이터의 발행(Publish) 및 구독(Subscribe) 기능 구현.
    - 공정 및 장비 데이터를 실시간으로 전송하여 공정 모니터링 및 생산 최적화를 지원.
    - 데이터 전송 지연을 최소화하여 생산 라인의 신속한 의사결정을 가능하게 함.

![비전 통계](/images/vision2.png)
### 📌주요 설정
1. 비전 불량률 통계 모니터링
    - 불량종류 별 통계를 수치로 제공.
    - 시간(일,월,년)으로 그래프로 시각적 자료 제공.
    - 불량품에 대한 상세정보(ID, 제품명, 라인명, 불량날짜, 불량종류) 정보를 제공.
    - API를 통해 데이터를 송수신.(서버설명넣기)
2. 서버연결
    - API를 통해 서버와 연동하여 생산 계획 데이터를 실시간으로 송수신 및 업데이트 가능.





