import React from "react";

export default function TestimonialCard(){
    return(
        <>
            <div className="self-stretch inline-flex flex-col justify-start items-start gap-20">
  <div className="self-stretch inline-flex justify-between items-start">
    <div className="flex-1 inline-flex flex-col justify-start items-center gap-6">
      <div className="size- px-6 py-2 bg-emerald-50 rounded-[32px] inline-flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-green-400 text-base font-medium font-['Poppins'] leading-6">Success stories</div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-8">
        <div className="self-stretch px-40 inline-flex justify-start items-start gap-2.5">
          <div className="flex-1 text-center justify-start text-zinc-800 text-5xl font-bold font-['Plus_Jakarta_Sans'] leading-[57.60px]">Dreams Becoming Reality</div>
        </div>
        <div className="self-stretch px-64 inline-flex justify-start items-start gap-2.5">
          <div className="flex-1 text-center justify-start text-neutral-500 text-2xl font-normal font-['Poppins'] leading-8">Real students, real results. Discover how personalized mentorship has transformed lives and unlocked new opportunities.</div>
        </div>
      </div>
    </div>
  </div>
  <div className="self-stretch inline-flex justify-start items-start gap-16">
    <div className="flex-1 p-8 bg-white rounded-3xl shadow-[0px_0px_20px_0px_rgba(172,204,242,0.30)] border-l-2 border-r-[5px] border-t-2 border-b-[5px] inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
      <div className="size- px-3.5 py-2 bg-indigo-950/5 rounded-3xl inline-flex justify-start items-center gap-1 overflow-hidden">
        <div data-svg-wrapper className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.51 3.13899C12.858 1.95399 11.142 1.95399 10.489 3.13899C9.63033 4.69938 8.92246 6.33814 8.37505 8.03299C8.34923 8.0993 8.30382 8.15617 8.24486 8.19601C8.1859 8.23585 8.1162 8.25678 8.04505 8.25599C6.57801 8.29412 5.11575 8.43985 3.67005 8.69199C2.33305 8.92499 1.74405 10.529 2.76005 11.522C2.88805 11.6473 3.01738 11.772 3.14805 11.896C4.12686 12.8228 5.16326 13.6869 6.25105 14.483C6.30047 14.5158 6.33791 14.5638 6.35774 14.6197C6.37758 14.6756 6.37874 14.7364 6.36105 14.793C5.81189 16.4407 5.41948 18.1365 5.18905 19.858C4.99905 21.282 6.50705 22.156 7.68405 21.552C9.11293 20.8197 10.4792 19.9712 11.769 19.015C11.8366 18.9672 11.9173 18.9416 12 18.9416C12.0828 18.9416 12.1635 18.9672 12.231 19.015C13.5201 19.9723 14.8865 20.8209 16.316 21.552C17.493 22.156 19.001 21.282 18.811 19.858C18.5809 18.1366 18.1889 16.4407 17.64 14.793C17.6224 14.7364 17.6235 14.6756 17.6434 14.6197C17.6632 14.5638 17.7006 14.5158 17.75 14.483C18.9825 13.5809 20.1488 12.5917 21.24 11.523C22.256 10.529 21.667 8.92499 20.33 8.69199C18.884 8.4398 17.4214 8.29408 15.954 8.25599C15.8831 8.25657 15.8136 8.23555 15.7548 8.19572C15.6961 8.1559 15.6508 8.09914 15.625 8.03299C15.0794 6.33749 14.3704 4.69857 13.51 3.13899Z" fill="#070750"/>
          </svg>
        </div>
        <div data-svg-wrapper className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.51 3.13899C12.858 1.95399 11.142 1.95399 10.489 3.13899C9.63033 4.69938 8.92246 6.33814 8.37505 8.03299C8.34923 8.0993 8.30382 8.15617 8.24486 8.19601C8.1859 8.23585 8.1162 8.25678 8.04505 8.25599C6.57801 8.29412 5.11575 8.43985 3.67005 8.69199C2.33305 8.92499 1.74405 10.529 2.76005 11.522C2.88805 11.6473 3.01738 11.772 3.14805 11.896C4.12686 12.8228 5.16326 13.6869 6.25105 14.483C6.30047 14.5158 6.33791 14.5638 6.35774 14.6197C6.37758 14.6756 6.37874 14.7364 6.36105 14.793C5.81189 16.4407 5.41948 18.1365 5.18905 19.858C4.99905 21.282 6.50705 22.156 7.68405 21.552C9.11293 20.8197 10.4792 19.9712 11.769 19.015C11.8366 18.9672 11.9173 18.9416 12 18.9416C12.0828 18.9416 12.1635 18.9672 12.231 19.015C13.5201 19.9723 14.8865 20.8209 16.316 21.552C17.493 22.156 19.001 21.282 18.811 19.858C18.5809 18.1366 18.1889 16.4407 17.64 14.793C17.6224 14.7364 17.6235 14.6756 17.6434 14.6197C17.6632 14.5638 17.7006 14.5158 17.75 14.483C18.9825 13.5809 20.1488 12.5917 21.24 11.523C22.256 10.529 21.667 8.92499 20.33 8.69199C18.884 8.4398 17.4214 8.29408 15.954 8.25599C15.8831 8.25657 15.8136 8.23555 15.7548 8.19572C15.6961 8.1559 15.6508 8.09914 15.625 8.03299C15.0794 6.33749 14.3704 4.69857 13.51 3.13899Z" fill="#070750"/>
          </svg>
        </div>
        <div data-svg-wrapper className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.51 3.13899C12.858 1.95399 11.142 1.95399 10.489 3.13899C9.63033 4.69938 8.92246 6.33814 8.37505 8.03299C8.34923 8.0993 8.30382 8.15617 8.24486 8.19601C8.1859 8.23585 8.1162 8.25678 8.04505 8.25599C6.57801 8.29412 5.11575 8.43985 3.67005 8.69199C2.33305 8.92499 1.74405 10.529 2.76005 11.522C2.88805 11.6473 3.01738 11.772 3.14805 11.896C4.12686 12.8228 5.16326 13.6869 6.25105 14.483C6.30047 14.5158 6.33791 14.5638 6.35774 14.6197C6.37758 14.6756 6.37874 14.7364 6.36105 14.793C5.81189 16.4407 5.41948 18.1365 5.18905 19.858C4.99905 21.282 6.50705 22.156 7.68405 21.552C9.11293 20.8197 10.4792 19.9712 11.769 19.015C11.8366 18.9672 11.9173 18.9416 12 18.9416C12.0828 18.9416 12.1635 18.9672 12.231 19.015C13.5201 19.9723 14.8865 20.8209 16.316 21.552C17.493 22.156 19.001 21.282 18.811 19.858C18.5809 18.1366 18.1889 16.4407 17.64 14.793C17.6224 14.7364 17.6235 14.6756 17.6434 14.6197C17.6632 14.5638 17.7006 14.5158 17.75 14.483C18.9825 13.5809 20.1488 12.5917 21.24 11.523C22.256 10.529 21.667 8.92499 20.33 8.69199C18.884 8.4398 17.4214 8.29408 15.954 8.25599C15.8831 8.25657 15.8136 8.23555 15.7548 8.19572C15.6961 8.1559 15.6508 8.09914 15.625 8.03299C15.0794 6.33749 14.3704 4.69857 13.51 3.13899Z" fill="#070750"/>
          </svg>
        </div>
        <div data-svg-wrapper className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.51 3.13899C12.858 1.95399 11.142 1.95399 10.489 3.13899C9.63033 4.69938 8.92246 6.33814 8.37505 8.03299C8.34923 8.0993 8.30382 8.15617 8.24486 8.19601C8.1859 8.23585 8.1162 8.25678 8.04505 8.25599C6.57801 8.29412 5.11575 8.43985 3.67005 8.69199C2.33305 8.92499 1.74405 10.529 2.76005 11.522C2.88805 11.6473 3.01738 11.772 3.14805 11.896C4.12686 12.8228 5.16326 13.6869 6.25105 14.483C6.30047 14.5158 6.33791 14.5638 6.35774 14.6197C6.37758 14.6756 6.37874 14.7364 6.36105 14.793C5.81189 16.4407 5.41948 18.1365 5.18905 19.858C4.99905 21.282 6.50705 22.156 7.68405 21.552C9.11293 20.8197 10.4792 19.9712 11.769 19.015C11.8366 18.9672 11.9173 18.9416 12 18.9416C12.0828 18.9416 12.1635 18.9672 12.231 19.015C13.5201 19.9723 14.8865 20.8209 16.316 21.552C17.493 22.156 19.001 21.282 18.811 19.858C18.5809 18.1366 18.1889 16.4407 17.64 14.793C17.6224 14.7364 17.6235 14.6756 17.6434 14.6197C17.6632 14.5638 17.7006 14.5158 17.75 14.483C18.9825 13.5809 20.1488 12.5917 21.24 11.523C22.256 10.529 21.667 8.92499 20.33 8.69199C18.884 8.4398 17.4214 8.29408 15.954 8.25599C15.8831 8.25657 15.8136 8.23555 15.7548 8.19572C15.6961 8.1559 15.6508 8.09914 15.625 8.03299C15.0794 6.33749 14.3704 4.69857 13.51 3.13899Z" fill="#070750"/>
          </svg>
        </div>
        <div data-svg-wrapper className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.51 3.13899C12.858 1.95399 11.142 1.95399 10.489 3.13899C9.63033 4.69938 8.92246 6.33814 8.37505 8.03299C8.34923 8.0993 8.30382 8.15617 8.24486 8.19601C8.1859 8.23585 8.1162 8.25678 8.04505 8.25599C6.57801 8.29412 5.11575 8.43985 3.67005 8.69199C2.33305 8.92499 1.74405 10.529 2.76005 11.522C2.88805 11.6473 3.01738 11.772 3.14805 11.896C4.12686 12.8228 5.16326 13.6869 6.25105 14.483C6.30047 14.5158 6.33791 14.5638 6.35774 14.6197C6.37758 14.6756 6.37874 14.7364 6.36105 14.793C5.81189 16.4407 5.41948 18.1365 5.18905 19.858C4.99905 21.282 6.50705 22.156 7.68405 21.552C9.11293 20.8197 10.4792 19.9712 11.769 19.015C11.8366 18.9672 11.9173 18.9416 12 18.9416C12.0828 18.9416 12.1635 18.9672 12.231 19.015C13.5201 19.9723 14.8865 20.8209 16.316 21.552C17.493 22.156 19.001 21.282 18.811 19.858C18.5809 18.1366 18.1889 16.4407 17.64 14.793C17.6224 14.7364 17.6235 14.6756 17.6434 14.6197C17.6632 14.5638 17.7006 14.5158 17.75 14.483C18.9825 13.5809 20.1488 12.5917 21.24 11.523C22.256 10.529 21.667 8.92499 20.33 8.69199C18.884 8.4398 17.4214 8.29408 15.954 8.25599C15.8831 8.25657 15.8136 8.23555 15.7548 8.19572C15.6961 8.1559 15.6508 8.09914 15.625 8.03299C15.0794 6.33749 14.3704 4.69857 13.51 3.13899Z" fill="#070750"/>
          </svg>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="flex-1 justify-start text-neutral-500 text-lg font-normal font-['Poppins'] leading-6">My mentor guided me through the US college application process and helped me build a strong STEM portfolio. Today, I’m studying at my dream university.</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="flex-1 justify-start text-zinc-800 text-xl font-bold font-['Plus_Jakarta_Sans'] leading-6">Maria Santos</div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="flex-1 justify-start text-zinc-800 text-base font-medium font-['Poppins'] leading-5">Brazil - MIT</div>
            </div>
          </div>
        </div>
        <div className="size- px-4 py-1 bg-indigo-950 rounded-[32px] inline-flex justify-center items-center gap-2.5">
          <div className="text-center justify-start text-indigo-50 text-base font-medium font-['Poppins'] leading-6">Accepted into MIT Engineering</div>
        </div>
      </div>
      <div data-svg-wrapper>
        <svg width="570" height="1" viewBox="0 0 570 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0.5H570" stroke="#C0C0C0"/>
        </svg>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch inline-flex justify-start items-start gap-2.5">
            <div className="flex-1 flex justify-start items-center gap-2.5">
              <div className="flex-1 justify-start text-neutral-500 text-xl font-medium font-['Poppins'] leading-6">Mentor’s Focus:</div>
            </div>
            <div className="flex-1 flex justify-start items-center gap-2.5">
              <div className="flex-1 text-right justify-start text-zinc-800 text-xl font-bold font-['Plus_Jakarta_Sans'] leading-6">Engineering & College Prep.</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch inline-flex justify-start items-start gap-2.5">
            <div className="flex-1 flex justify-start items-center gap-2.5">
              <div className="flex-1 justify-start text-neutral-500 text-xl font-medium font-['Poppins'] leading-6">Journey time:</div>
            </div>
            <div className="flex-1 flex justify-start items-center gap-2.5">
              <div className="flex-1 text-right justify-start text-indigo-950 text-xl font-bold font-['Plus_Jakarta_Sans'] leading-6">8 months</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1 p-8 bg-white rounded-3xl shadow-[0px_0px_20px_0px_rgba(76,175,131,0.30)] inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
      <div className="size- px-3.5 py-2 bg-purple-600/5 rounded-3xl inline-flex justify-start items-center gap-1 overflow-hidden">
        <div data-svg-wrapper className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.51 3.13899C12.858 1.95399 11.142 1.95399 10.489 3.13899C9.63033 4.69938 8.92246 6.33814 8.37505 8.03299C8.34923 8.0993 8.30382 8.15617 8.24486 8.19601C8.1859 8.23585 8.1162 8.25678 8.04505 8.25599C6.57801 8.29412 5.11575 8.43985 3.67005 8.69199C2.33305 8.92499 1.74405 10.529 2.76005 11.522C2.88805 11.6473 3.01738 11.772 3.14805 11.896C4.12686 12.8228 5.16326 13.6869 6.25105 14.483C6.30047 14.5158 6.33791 14.5638 6.35774 14.6197C6.37758 14.6756 6.37874 14.7364 6.36105 14.793C5.81189 16.4407 5.41948 18.1365 5.18905 19.858C4.99905 21.282 6.50705 22.156 7.68405 21.552C9.11293 20.8197 10.4792 19.9712 11.769 19.015C11.8366 18.9672 11.9173 18.9416 12 18.9416C12.0828 18.9416 12.1635 18.9672 12.231 19.015C13.5201 19.9723 14.8865 20.8209 16.316 21.552C17.493 22.156 19.001 21.282 18.811 19.858C18.5809 18.1366 18.1889 16.4407 17.64 14.793C17.6224 14.7364 17.6235 14.6756 17.6434 14.6197C17.6632 14.5638 17.7006 14.5158 17.75 14.483C18.9825 13.5809 20.1488 12.5917 21.24 11.523C22.256 10.529 21.667 8.92499 20.33 8.69199C18.884 8.4398 17.4214 8.29408 15.954 8.25599C15.8831 8.25657 15.8136 8.23555 15.7548 8.19572C15.6961 8.1559 15.6508 8.09914 15.625 8.03299C15.0794 6.33749 14.3704 4.69857 13.51 3.13899Z" fill="#8A38F5"/>
          </svg>
        </div>
        <div data-svg-wrapper className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.51 3.13899C12.858 1.95399 11.142 1.95399 10.489 3.13899C9.63033 4.69938 8.92246 6.33814 8.37505 8.03299C8.34923 8.0993 8.30382 8.15617 8.24486 8.19601C8.1859 8.23585 8.1162 8.25678 8.04505 8.25599C6.57801 8.29412 5.11575 8.43985 3.67005 8.69199C2.33305 8.92499 1.74405 10.529 2.76005 11.522C2.88805 11.6473 3.01738 11.772 3.14805 11.896C4.12686 12.8228 5.16326 13.6869 6.25105 14.483C6.30047 14.5158 6.33791 14.5638 6.35774 14.6197C6.37758 14.6756 6.37874 14.7364 6.36105 14.793C5.81189 16.4407 5.41948 18.1365 5.18905 19.858C4.99905 21.282 6.50705 22.156 7.68405 21.552C9.11293 20.8197 10.4792 19.9712 11.769 19.015C11.8366 18.9672 11.9173 18.9416 12 18.9416C12.0828 18.9416 12.1635 18.9672 12.231 19.015C13.5201 19.9723 14.8865 20.8209 16.316 21.552C17.493 22.156 19.001 21.282 18.811 19.858C18.5809 18.1366 18.1889 16.4407 17.64 14.793C17.6224 14.7364 17.6235 14.6756 17.6434 14.6197C17.6632 14.5638 17.7006 14.5158 17.75 14.483C18.9825 13.5809 20.1488 12.5917 21.24 11.523C22.256 10.529 21.667 8.92499 20.33 8.69199C18.884 8.4398 17.4214 8.29408 15.954 8.25599C15.8831 8.25657 15.8136 8.23555 15.7548 8.19572C15.6961 8.1559 15.6508 8.09914 15.625 8.03299C15.0794 6.33749 14.3704 4.69857 13.51 3.13899Z" fill="#8A38F5"/>
          </svg>
        </div>
        <div data-svg-wrapper className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.51 3.13899C12.858 1.95399 11.142 1.95399 10.489 3.13899C9.63033 4.69938 8.92246 6.33814 8.37505 8.03299C8.34923 8.0993 8.30382 8.15617 8.24486 8.19601C8.1859 8.23585 8.1162 8.25678 8.04505 8.25599C6.57801 8.29412 5.11575 8.43985 3.67005 8.69199C2.33305 8.92499 1.74405 10.529 2.76005 11.522C2.88805 11.6473 3.01738 11.772 3.14805 11.896C4.12686 12.8228 5.16326 13.6869 6.25105 14.483C6.30047 14.5158 6.33791 14.5638 6.35774 14.6197C6.37758 14.6756 6.37874 14.7364 6.36105 14.793C5.81189 16.4407 5.41948 18.1365 5.18905 19.858C4.99905 21.282 6.50705 22.156 7.68405 21.552C9.11293 20.8197 10.4792 19.9712 11.769 19.015C11.8366 18.9672 11.9173 18.9416 12 18.9416C12.0828 18.9416 12.1635 18.9672 12.231 19.015C13.5201 19.9723 14.8865 20.8209 16.316 21.552C17.493 22.156 19.001 21.282 18.811 19.858C18.5809 18.1366 18.1889 16.4407 17.64 14.793C17.6224 14.7364 17.6235 14.6756 17.6434 14.6197C17.6632 14.5638 17.7006 14.5158 17.75 14.483C18.9825 13.5809 20.1488 12.5917 21.24 11.523C22.256 10.529 21.667 8.92499 20.33 8.69199C18.884 8.4398 17.4214 8.29408 15.954 8.25599C15.8831 8.25657 15.8136 8.23555 15.7548 8.19572C15.6961 8.1559 15.6508 8.09914 15.625 8.03299C15.0794 6.33749 14.3704 4.69857 13.51 3.13899Z" fill="#8A38F5"/>
          </svg>
        </div>
        <div data-svg-wrapper className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.51 3.13899C12.858 1.95399 11.142 1.95399 10.489 3.13899C9.63033 4.69938 8.92246 6.33814 8.37505 8.03299C8.34923 8.0993 8.30382 8.15617 8.24486 8.19601C8.1859 8.23585 8.1162 8.25678 8.04505 8.25599C6.57801 8.29412 5.11575 8.43985 3.67005 8.69199C2.33305 8.92499 1.74405 10.529 2.76005 11.522C2.88805 11.6473 3.01738 11.772 3.14805 11.896C4.12686 12.8228 5.16326 13.6869 6.25105 14.483C6.30047 14.5158 6.33791 14.5638 6.35774 14.6197C6.37758 14.6756 6.37874 14.7364 6.36105 14.793C5.81189 16.4407 5.41948 18.1365 5.18905 19.858C4.99905 21.282 6.50705 22.156 7.68405 21.552C9.11293 20.8197 10.4792 19.9712 11.769 19.015C11.8366 18.9672 11.9173 18.9416 12 18.9416C12.0828 18.9416 12.1635 18.9672 12.231 19.015C13.5201 19.9723 14.8865 20.8209 16.316 21.552C17.493 22.156 19.001 21.282 18.811 19.858C18.5809 18.1366 18.1889 16.4407 17.64 14.793C17.6224 14.7364 17.6235 14.6756 17.6434 14.6197C17.6632 14.5638 17.7006 14.5158 17.75 14.483C18.9825 13.5809 20.1488 12.5917 21.24 11.523C22.256 10.529 21.667 8.92499 20.33 8.69199C18.884 8.4398 17.4214 8.29408 15.954 8.25599C15.8831 8.25657 15.8136 8.23555 15.7548 8.19572C15.6961 8.1559 15.6508 8.09914 15.625 8.03299C15.0794 6.33749 14.3704 4.69857 13.51 3.13899Z" fill="#8A38F5"/>
          </svg>
        </div>
        <div data-svg-wrapper className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.51 3.13899C12.858 1.95399 11.142 1.95399 10.489 3.13899C9.63033 4.69938 8.92246 6.33814 8.37505 8.03299C8.34923 8.0993 8.30382 8.15617 8.24486 8.19601C8.1859 8.23585 8.1162 8.25678 8.04505 8.25599C6.57801 8.29412 5.11575 8.43985 3.67005 8.69199C2.33305 8.92499 1.74405 10.529 2.76005 11.522C2.88805 11.6473 3.01738 11.772 3.14805 11.896C4.12686 12.8228 5.16326 13.6869 6.25105 14.483C6.30047 14.5158 6.33791 14.5638 6.35774 14.6197C6.37758 14.6756 6.37874 14.7364 6.36105 14.793C5.81189 16.4407 5.41948 18.1365 5.18905 19.858C4.99905 21.282 6.50705 22.156 7.68405 21.552C9.11293 20.8197 10.4792 19.9712 11.769 19.015C11.8366 18.9672 11.9173 18.9416 12 18.9416C12.0828 18.9416 12.1635 18.9672 12.231 19.015C13.5201 19.9723 14.8865 20.8209 16.316 21.552C17.493 22.156 19.001 21.282 18.811 19.858C18.5809 18.1366 18.1889 16.4407 17.64 14.793C17.6224 14.7364 17.6235 14.6756 17.6434 14.6197C17.6632 14.5638 17.7006 14.5158 17.75 14.483C18.9825 13.5809 20.1488 12.5917 21.24 11.523C22.256 10.529 21.667 8.92499 20.33 8.69199C18.884 8.4398 17.4214 8.29408 15.954 8.25599C15.8831 8.25657 15.8136 8.23555 15.7548 8.19572C15.6961 8.1559 15.6508 8.09914 15.625 8.03299C15.0794 6.33749 14.3704 4.69857 13.51 3.13899Z" fill="#8A38F5"/>
          </svg>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="flex-1 justify-start text-neutral-500 text-lg font-normal font-['Poppins'] leading-6">My mentor’s guidance in research methods and academic writing helped me publish my first paper and become a Rhodes Scholar finalist.</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="flex-1 justify-start text-zinc-800 text-xl font-bold font-['Plus_Jakarta_Sans'] leading-6">Maria Santos</div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="flex-1 justify-start text-zinc-800 text-base font-medium font-['Poppins'] leading-5">India - Oxford</div>
            </div>
          </div>
        </div>
        <div className="size- px-4 py-1 bg-purple-600 rounded-[32px] inline-flex justify-center items-center gap-2.5">
          <div className="text-center justify-start text-indigo-50 text-base font-medium font-['Poppins'] leading-6">Rhodes Scholar Finalist</div>
        </div>
      </div>
      <div data-svg-wrapper>
        <svg width="570" height="1" viewBox="0 0 570 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0.5H570" stroke="#C0C0C0"/>
        </svg>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch inline-flex justify-start items-start gap-2.5">
            <div className="flex-1 flex justify-start items-center gap-2.5">
              <div className="flex-1 justify-start text-neutral-500 text-xl font-medium font-['Poppins'] leading-6">Mentor’s Focus:</div>
            </div>
            <div className="flex-1 flex justify-start items-center gap-2.5">
              <div className="flex-1 text-right justify-start text-zinc-800 text-xl font-bold font-['Plus_Jakarta_Sans'] leading-6">Academic research</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch inline-flex justify-start items-start gap-2.5">
            <div className="flex-1 flex justify-start items-center gap-2.5">
              <div className="flex-1 justify-start text-neutral-500 text-xl font-medium font-['Poppins'] leading-6">Journey time:</div>
            </div>
            <div className="flex-1 flex justify-start items-center gap-2.5">
              <div className="flex-1 text-right justify-start text-purple-600 text-xl font-bold font-['Plus_Jakarta_Sans'] leading-6">10 months</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="self-stretch inline-flex flex-col justify-start items-start gap-12 mt-40">
  <div className="self-stretch flex flex-col justify-start items-center gap-6">
    <div className="self-stretch flex flex-col justify-center items-center gap-8">
      <div className="self-stretch px-64 inline-flex justify-center items-center gap-2.5">
        <div data-svg-wrapper>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill="#070750"/>
          </svg>
        </div>
        <div className="text-center justify-start text-neutral-500 text-2xl font-normal font-['Poppins'] leading-8">Join thousands of students achieving extraordinary results</div>
      </div>
    </div>
  </div>
  <div className="self-stretch px-64 inline-flex justify-center items-center gap-16">
    <div className="size- inline-flex flex-col justify-start items-center gap-2.5">
      <div className="size- inline-flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-indigo-950 text-5xl font-bold font-['Plus_Jakarta_Sans'] leading-[57.60px]">94%</div>
      </div>
      <div className="self-stretch inline-flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-zinc-800 text-2xl font-normal font-['Poppins'] capitalize leading-8">achieve their goals</div>
      </div>
    </div>
    <div className="size- inline-flex flex-col justify-start items-center gap-2.5">
      <div className="size- inline-flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-orange-300 text-5xl font-bold font-['Plus_Jakarta_Sans'] leading-[57.60px]">84%</div>
      </div>
      <div className="self-stretch inline-flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-zinc-800 text-2xl font-normal font-['Poppins'] leading-8">College Acceptances</div>
      </div>
    </div>
    <div className="size- inline-flex flex-col justify-start items-center gap-2.5">
      <div className="size- inline-flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-purple-600 text-5xl font-bold font-['Plus_Jakarta_Sans'] leading-[57.60px]">72%</div>
      </div>
      <div className="self-stretch inline-flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-zinc-800 text-2xl font-normal font-['Poppins'] leading-8">Scholarship Winners</div>
      </div>
    </div>
    <div className="size- inline-flex flex-col justify-start items-center gap-2.5">
      <div className="size- inline-flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-blue-500 text-5xl font-bold font-['Plus_Jakarta_Sans'] leading-[57.60px]">4.9</div>
      </div>
      <div className="self-stretch inline-flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-zinc-800 text-2xl font-normal font-['Poppins'] leading-8">Average Rating</div>
      </div>
    </div>
  </div>
  <div className="self-stretch flex flex-col justify-start items-center gap-12">
    <div className="size- inline-flex justify-start items-start gap-4">
      <div data-state="primary button with icon" className="size- px-6 py-4 bg-indigo-950 rounded-lg flex justify-center items-center gap-2.5 overflow-hidden">
        <div data-state="active" className="size- inline-flex flex-col justify-start items-start">
          <div className="size- rounded-[68px] flex flex-col justify-center items-start gap-2.5">
            <div className="justify-start text-white text-base font-medium font-['Poppins'] leading-5">Start your success story</div>
          </div>
          <div className="w-3 h-0 opacity-0 outline-1 outline-offset-[-0.50px] outline-white" />
        </div>
        <div data-svg-wrapper className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 16L18 12M18 12L14 8M18 12H6" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}