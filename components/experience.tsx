export function Experience() {
    return (
      <div className="pb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div className="border border-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">ITC Infotech</h3>
                <p className="text-gray-400">Associate IT Consultant | Bengaluru</p>
              </div>
              <span className="text-gray-400">Aug 2021 - May 2023</span>
            </div>
            <p className="text-gray-400 mb-4">
            Conducted extensive <b>manual testing</b>, identifying critical defects and ensuring seamless application 
            performance through detailed test case design, <b>regression testing</b>, and collaboration with Agile teams.
            </p>
          </div>
  
          {/* <div className="border border-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Defence Research and Development Organisation (DRDO)</h3>
                <p className="text-gray-400">Project Intern | RCI-Hyderabad</p>
              </div>
              <span className="text-gray-400">Jan 2024 - Feb 2024</span>
            </div>
            <p className="text-gray-400">
              Developed a Security Information and Event Management (SIEM) system, optimizing log reception using UDP sockets
              and leveraging concurrent futures library for efficient multithreading.
            </p>
          </div> */}
        </div>
      </div>
    )
  }
  
  