import "./JobListing.css"
import "/assets/images/account.svg"
import "/assets/images/eyecam-co.svg"
import "/assets/images/faceit.svg"
import "/assets/images/favicon-32x32.png"
import "/assets/images/icon-remove.svg"
import "/assets/images/insure.svg"
import "/assets/images/loop-studios.svg"
import "/assets/images/manage.svg"
import "/assets/images/myhome.svg"
import "/assets/images/photosnap.svg"
import "/assets/images/shortly.svg"
import "/assets/images/the-air-filter-company.svg"

export function JobListing({
  id,
  company,
  logo,
  new: new_posting,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  addFilter,
}) {
  return (
    <>
      <div className={featured ? "listing listing--featured" : "listing"}>
        <img
          className="listing__logo"
          src={import.meta.env.BASE_URL + "assets/" + logo}
          alt="logo"
        />
        <div className="listing__info-container">
          <div className="listing__title-container">
            <h2 className="listing__company-name">{company}</h2>
            {new_posting && (
              <h2 className="listing__tag listing__tag--new">NEW!</h2>
            )}
            {featured && (
              <h2 className="listing__tag listing__tag--featured">FEATURED</h2>
            )}
          </div>
          <h2 className="listing__position">{position}</h2>
          <div className="listing__details">{`${postedAt} • ${contract} • ${location}`}</div>
        </div>
        <ul className="listing__skills-list list">
          {[role, level, ...languages, ...tools].map((skill) => {
            return (
              <li
                className="list__item"
                key={skill}
                onClick={(event) => {
                  addFilter(skill)
                }}
              >
                {skill}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
