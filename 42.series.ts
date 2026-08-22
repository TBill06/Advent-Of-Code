
{/* Mental Model to remember how class works:
  class Dog
    ↓
  "I am defining what a Dog object looks like."

  name: string
    ↓
  "Every Dog has a name."

  constructor(name)
    ↓
  "When someone creates a Dog, here's what to do with the initial data."
  this.name = name
    ↓
  "Put the argument into THIS particular Dog."

  bark()
    ↓
  "Every Dog knows how to do this."
*/}

// V1.0 Basic Solution Cooked:
export class Series {
  private series: string;
  constructor(series: string) {
    this.series = series
  }

  slices(sliceLength: number): Array<number[]> {
    let ans = []
    if (this.series.length == 0) throw new Error ('series cannot be empty')
    else if (sliceLength < 0) throw new Error ('slice length cannot be negative')
    else if (sliceLength == 0) throw new Error ('slice length cannot be zero')
    else if (sliceLength > this.series.length) throw new Error("slice length cannot be greater than series length")
    else {
        for (let i = 0; i<this.series.length; i++) {
            if ((this.series[i+sliceLength-1])) {
                ans.push(this.series.slice(i,i+sliceLength).split('').map(Number))
            }
        }
    }
    return ans
  }
}

// V2.0 Did some changes to V1.0 to make it more performant
// Removed some unncessary checks
export class SeriesV2 {
  // TS automatically does the construction
  constructor(private series: string) {}

  slices(sliceLength: number): Array<number[]> {
    if (this.series.length == 0) throw new Error ('series cannot be empty')
    if (sliceLength < 0) throw new Error ('slice length cannot be negative')
    if (sliceLength == 0) throw new Error ('slice length cannot be zero')
    if (sliceLength > this.series.length) throw new Error("slice length cannot be greater than series length")
    
    // Converting the series into a number[] once
    const digits = this.series.split('').map(Number)
    const ans: Array<number[]> = [];
    for (let i = 0; i <= digits.length - sliceLength; i++) {
      ans.push(digits.slice(i, i + sliceLength));
    }
    return ans
  }
}