// app/test_page/page.tsx
export default function TestPage() {
    return (
      <main className="w-full" style={{ background: "#f4f4f4", minHeight: "200vh" }}>
        {/* 화면 중앙 가이드 */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            width: 2,
            height: "100vh",
            background: "#1e6bff",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
  
        {/* 일부러 스크롤 생기게 */}
        <div style={{ height: 24 }} />
  
        <Section title="Case 1: section-padding + mx-auto(컨테이너) 같이 쓰기 (보통은 문제 없음)">
          <div className="section-padding w-full">
            <div className="mx-auto max-w-[500px] border-[3px] border-red-600 bg-white p-7">
              <p className="text-left text-[18px] leading-7">
                이 케이스는 솔직히 말해서, <b>padding + mx-auto만으로는</b> 대부분
                환경에서 "왼쪽 치우침"이 잘 안 생깁니다.
                <br />
                (그래서 지금까지 테스트에서 둘 다 중앙처럼 보인 게 정상입니다.)
              </p>
            </div>
          </div>
        </Section>
  
        <Section className title="Case 2: 역할 분리 (padding은 section, mx-auto는 inner container)">
          <div className="section-padding">
            <div className="mx-auto max-w-[500px] border-[3px] border-green-700 bg-white p-7">
              <p className="text-left text-[18px] leading-7">
                이 구조는 실무에서 가장 안전한 패턴입니다.
                <br />
                padding과 중앙정렬의 책임을 분리해서, 글로벌 CSS가 섞여도 깨질
                확률이 낮습니다.
              </p>
            </div>
          </div>
        </Section>
  
        <Section title="Case 3: 진짜로 치우침이 나는 대표 패턴 (100vw + left-1/2 + -translate-x-1/2)">
          {/* 의도적으로 '풀블리드'를 흉내냄 */}
          <div className="relative left-1/2 w-screen -translate-x-1/2 section-padding">
            <div className="mx-auto w-full max-w-[900px] border-[3px] border-purple-700 bg-white p-7">
              <p className="text-left text-[18px] leading-7">
                여기서 치우침이 보이면, 원인은 거의 100% <b>100vw(w-screen)</b>{" "}
                입니다.
                <br />
                특히 어떤 전역 CSS(또는 컴포넌트)가 overflow/scrollbar 정책을
                건드리면 더 잘 드러납니다.
              </p>
  
              <div style={{ height: 16 }} />
  
              <p className="text-left text-[14px] leading-6 opacity-80">
                체크 포인트:
                <br />
                - 이 보라색 박스의 “테두리 중심”이 파란선과 정확히 겹치는가?
                <br />
                - 겹치지 않으면, w-screen/100vw 기반 풀블리드 구현이 원인일
                가능성이 큽니다.
              </p>
            </div>
          </div>
        </Section>
  
        <Section title="Case 4: scrollbar-gutter로 100vw 문제를 안정화(가능한 브라우저에서)">
          <div
            style={{
              padding: "0 24px",
            }}
          >
            <div className="mx-auto max-w-[900px] border-[3px] border-black bg-white p-7">
              <p className="text-left text-[18px] leading-7">
                아래 전역 CSS에서 <code>scrollbar-gutter: stable;</code>을 켜면
                (지원 브라우저에서) 레이아웃 점프/치우침이 줄어듭니다.
              </p>
            </div>
          </div>
        </Section>
  
        {/* 아래 공간으로 스크롤 확실히 생기게 */}
        <div style={{ height: 1200 }} />
      </main>
    );
  }
  
  function Section({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <section className="w-full" style={{ padding: "40px 0", background: "#e9e9e9", marginBottom: 28 }}>
        <h2 style={{ margin: "0 0 12px", padding: "0 24px", fontSize: 20, fontWeight: 700 }}>
          {title}
        </h2>
        {children}
      </section>
    );
  }
  