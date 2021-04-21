## npm 주소

- https://www.npmjs.com/package/myungjoo-npm-deploy-sample

## 설치방법

- npm i myungjoo-npm-deploy-sample 혹은 yarn add myungjoo-npm-deploy-sample

## 사용방법

```typescript
import { commons } from "myungjoo-npm-deploy-sample";

const strArr: Array<string> = ["a", "b", "c"];

if (commons.getIsArray(strArr)) {
  // 참인 경우 실행
} else {
  // 참이 아닌 경우 실행
}
```

## Docs

| commons                           | Return  | Parameter                   | Description                                    |
| --------------------------------- | ------- | --------------------------- | ---------------------------------------------- |
| `getIsArray(data)`                | boolean | `data : any`                | 유효한 배열인지 체크                           |
| `getIsDate(data)`                 | boolean | `data : any`                | 날짜 객체인지 체크                             |
| `getDateDiffIndays(date1, date2)` | number  | `date1 : any`, `date2: any` | 두 날짜간의 차이값 반환, 에러일 경우엔 -1 반환 |
