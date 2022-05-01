# 포트폴리오 사이트

포트폴리오 사이트 프로젝트

- frontend: https://github.com/khsily/portfolio-client
- backend: https://github.com/khsily/portfolio-server

## 사용 기술

- react + typescript (CRA)
- react-query
- sass (css module)

## 프로젝트 구조

```bash
src
├── components              : 컴퍼넌트
├── hooks                   : 커스텀 훅
├── pages                   : 페이지 컴퍼넌트
├── services                : 서버 연동 관련
│   ├── api                 : 서버 api
│   └── features            : react-query
│       └── [model]
│           ├── key.tsx     : react-query [model] 키 constant
│           └── query.tsx   : react-query [model] 쿼리 훅
├── shared
│   ├── types               : 글로벌 타입
│   └── utils               : 글러벌 유틸 함수
└── styles                  : 글로벌 스타일
```
