import {FormatTimePipePipe} from "./format-time.pipes";

describe('FormatTimePipe', () => {
  it('should display 1 hour if have 3600 seconds', () => {
    let pipe = new FormatTimePipePipe();
    expect(pipe.transform(3600)).toEqual('1 hours ');
  })

  it('should display 1 hours and 30 minutes given 5400 seconds', () => {
    let pipe = new FormatTimePipePipe();
    expect(pipe.transform(5400)).toEqual('1 hours 30 minutes ');
  })

  it('should display 1 hours 30 minutes 50 seconds given 5400 seconds', () => {
    let pipe = new FormatTimePipePipe();
    expect(pipe.transform(5450)).toEqual('1 hours 30 minutes 50 seconds');
  })
})
