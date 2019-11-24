const { webSocket } = rxjs.webSocket;
const { fromEvent, Subject, of, merge, throwError } = rxjs;
const { groupBy, mergeMap, scan, throttleTime, switchMap, delay, map, filter, catchError, retry, retryWhen } = rxjs.operators;
import { getUser, register } from './service';


const ws$ = webSocket(`wss://demo-game.debugger.pl`)

function init() {
  ws$.subscribe(console.log)
}

function userNotFound(err) {
  debugger
}

getUser().subscribe(
  init,
  (err) => {
    userNotFound(err)
  }
)

init()