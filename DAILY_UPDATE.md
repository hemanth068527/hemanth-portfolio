# Daily Learning Update

After finishing each daily learning session, update:

`src/data/dailyLearning.js`

1. Increase `completedDays` to the latest day.
2. Add one new object inside `dailyLog`.
3. Write the exact topic you learned in `note`.

Example:

```js
{
  day: 6,
  title: 'C loops practice',
  note: 'Practiced for loops, while loops, and simple pattern programs.',
}
```

Then run:

```powershell
npm run build
git add src/data/dailyLearning.js
git commit -m "Update day 6 learning log"
git push
```

Vercel will redeploy automatically after the push.
