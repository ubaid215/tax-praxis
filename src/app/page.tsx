import ABetterWay from '@/components/home/ABetterWay'
import OurApproach from '@/components/home/OurApproach'
import TheProblemWeSolve from '@/components/home/TheProblemWeSolve'
import ValueProposition from '@/components/home/ValueProposition'
import WhyWeExist from '@/components/home/WhyWeExist'
import Hero from '@/components/layout/Hero'

const page = () => {
  return (
     <div>
    <Hero/>
    <ValueProposition/>
    <WhyWeExist/>
    <OurApproach/>
    <TheProblemWeSolve/>
    <ABetterWay/>

  </div>
  )
}

export default page