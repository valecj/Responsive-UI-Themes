import React from 'react';
import classnames from 'classnames';
import styles from './ecommerce.scss'
import {
  ArrowLeftIcon,
  DashboardIcon,
  BagIcon,
  TrackIcon,
  MessageIcon,
  PieIcon,
  PlaceIcon,
  SettingsIcon,
  LogoutIcon,
  SearchIcon,
  NotificationIcon,
  MoreIcon,
  FilterIcon,
  FileIcon,
  DownloadIcon,
  MicrophoneIcon,
  SendIcon
} from '../../assets/icons';

const Ecommerce = () => {
  return (
    <div className={styles.container}>
      <aside>
        <div className={styles.nav}>
          <ul>
            {["A", "B", "C"].map((letter, idx) => (
              <li key={idx}>
                <span>{letter}</span>
              </li>
            ))}
          </ul>
          <button>+</button>
        </div>

        <div className={styles.menu}>
          <header>
            <select>
              <option>Jello</option>
            </select>
            <button>
              <ArrowLeftIcon />
            </button>
          </header>

          <ul>
            <li>
              <span>
                <DashboardIcon />
              </span>
              <span>Dashboard</span>
            </li>
            <li>
              <span>
                <BagIcon />
              </span>
              <span>Shipment</span>
            </li>
            <li>
              <span>
                <TrackIcon />
              </span>
              <span>Tracking</span>
            </li>
            <li>
              <span>
                <MessageIcon />
              </span>
              <span>Messages</span>

              <div className={styles.chip}>138</div>
            </li>
            <li>
              <span>
                <PieIcon />
              </span>
              <span>Revenue</span>
            </li>
            <li>
              <span>
                <PlaceIcon />
              </span>
              <span>Maps</span>
            </li>
          </ul>

          <ul>
            <li>
              <span>
                <SettingsIcon />
              </span>
              <span>Settings</span>
            </li>
            <li>
              <span>
                <LogoutIcon />
              </span>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </aside>

      <main>
        <header>
          <button className={styles.menuIcon}>
            menu
      </button>

          <div className={styles.filters}>
            <select>
              <option>All categories</option>
            </select>
            <div className={styles.divider}></div>
            <div className={styles.search}>
              <input placeholder="Search here" />
              <button>
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className={styles.userActions}>
            <button className={styles.notifications}>
              <NotificationIcon />
            </button>

            <button className={styles.avatar}>
              <img src="https://i.imgur.com/U0Z9C9K.png" width="100%" />
            </button>

            <button className={styles.more}>
              <MoreIcon />
            </button>
          </div>
        </header>

        <button className={styles.filtersIcon}>
          <FilterIcon />
        </button>

        <section className={styles.chat}>
          <div className={styles.left}>
            <div className={styles.groups}>
              <h2>Group</h2>
              <ul>
                <li>
                  <div className={styles.avatar}>DT</div>
                  <div className={styles.user}>
                    <strong>Dev team</strong>
                    <p>Grateful thoughts 😅</p>
                  </div>
                  <div className={styles.chip}>3</div>
                </li>

                <li>
                  <div className={styles.avatar}>MS</div>
                  <div className={styles.user}>
                    <strong>Moonlab Std</strong>
                    <p>Very good!</p>
                  </div>
                </li>

                <li>
                  <div className={styles.avatar}>OG</div>
                  <div className={styles.user}>
                    <strong>Ohm Gala</strong>
                    <p>Thanks! I'm going to forward the ...</p>
                  </div>
                  <div className={styles.chip}>12</div>
                </li>

                <li>
                  <div className={styles.avatar}>SM</div>
                  <div className={styles.user}>
                    <strong>Sila maz</strong>
                    <p>Okay, Cool!</p>
                  </div>
                  <div className={styles.chip}>7</div>
                </li>

                <li>
                  <div className={styles.avatar}>PH</div>
                  <div className={styles.user}>
                    <strong>Pro masda</strong>
                    <p>Awesome, let's do this</p>
                  </div>
                </li>
              </ul>

              <a className={styles.showAll}>show all</a>
            </div>

            <div className={styles.persons}>
              <h2>Person</h2>
              <ul>
                <li>
                  <div className={styles.avatar}>
                    <img src="https://i.imgur.com/ofhJyof.png" witdh="100%" />
                  </div>
                  <div className={styles.user}>
                    <strong>Lilian Davis</strong>
                    <p>OMG!! 😱</p>
                  </div>
                  <div className={styles.chip}>2</div>
                </li>

                <li>
                  <div className={styles.avatar}>
                    <img src="https://i.imgur.com/J3SEvxY.png" witdh="100%" />
                  </div>
                  <div className={styles.user}>
                    <strong>Gavin Harrison</strong>
                    <p>You can check it now.</p>
                  </div>
                </li>

                <li>
                  <div className={styles.avatar}>
                    <img src="https://i.imgur.com/ObKqjzF.png" witdh="100%" />
                  </div>
                  <div className={styles.user}>
                    <strong>Helena Wong</strong>
                    <p>Please share those recap to me, i ...</p>
                  </div>
                  <div className={styles.chip}>14</div>
                </li>

                <li>
                  <div className={styles.avatar}>
                    <img src="https://i.imgur.com/1yoI9tF.png" witdh="100%" />
                  </div>
                  <div className={styles.user}>
                    <strong>Dylan Murray</strong>
                    <p>Thank you 😘</p>
                  </div>
                  <div className={styles.chip}>4</div>
                </li>

                <li>
                  <div className={styles.avatar}>
                    <img src="https://i.imgur.com/gCL7YRO.png" witdh="100%" />
                  </div>
                  <div className={styles.user}>
                    <strong>Cole Strickland</strong>
                    <p>Hahaha lol</p>
                  </div>
                </li>
              </ul>

              <a className={styles.showAll}>show all</a>
            </div>
          </div>

          <div className={styles.right}>
            <header>
              <h3>Moonlab Std</h3>

              <div className={styles.info}>
                <div className={styles.participants}>
                  <div className={styles.avatars}>
                    <img src="https://i.imgur.com/KDQyx84.png" />
                    <img src="https://i.imgur.com/AXPZjay.png" />
                    <img src="https://i.imgur.com/1yoI9tF.png" />
                  </div>
                  <span>and 3 others</span>
                </div>

                <button className={styles.more}>
                  <MoreIcon />
                </button>
              </div>
            </header>

            <div className={styles.messages}>
              <div className={styles.divider}>
                <div className={styles.text}>yesterday</div>
              </div>

              <div className={styles.userMessage}>
                <div className={styles.avatar}>
                  <img src="https://i.imgur.com/KDQyx84.png" width="100%" />
                </div>

                <div className={styles.content}>
                  <strong>Olivia Wilde</strong>
                  <div className={styles.message}>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</p>
                  </div>
                  <small>3:54 PM</small>
                </div>
              </div>

              <div className={styles.yourMessage}>
                <div className={styles.message}>
                  <p>Sed ut perspiciatis unde omnis</p>
                </div>
                <div className={styles.message}>
                  <p>Totam rem aperiam</p>
                </div>
              </div>

              <div className={styles.userMessage}>
                <div className={styles.avatar}>
                  <img src="https://i.imgur.com/AXPZjay.png" width="100%" />
                </div>

                <div className={styles.content}>
                  <strong>Lisa Cuddy</strong>
                  <div className={classnames([styles.audio, styles.message])}>
                    <button>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6308 13.131C16.5743 13.189 16.3609 13.437 16.1622 13.641C14.9971 14.924 11.9576 17.024 10.3668 17.665C10.1252 17.768 9.51437 17.986 9.18802 18C8.8753 18 8.5772 17.928 8.29274 17.782C7.93814 17.578 7.65368 17.257 7.49781 16.878C7.39747 16.615 7.2416 15.828 7.2416 15.814C7.08573 14.953 7 13.554 7 12.008C7 10.535 7.08573 9.193 7.21335 8.319C7.22796 8.305 7.38383 7.327 7.55431 6.992C7.86702 6.38 8.47784 6 9.13151 6H9.18802C9.61374 6.015 10.509 6.395 10.509 6.409C12.0141 7.051 14.9834 9.048 16.1768 10.375C16.1768 10.375 16.5129 10.716 16.659 10.929C16.887 11.235 17 11.614 17 11.993C17 12.416 16.8724 12.81 16.6308 13.131Z" />
                      </svg>
                    </button>
                    <img src="https://i.imgur.com/BbkIqNr.png" />
                  </div>
                  <div className={styles.message}>
                    <p>Nulla pariatur</p>
                  </div>
                  <small>3:54 PM</small>
                </div>
              </div>

              <div className={styles.divider}>
                <div className={styles.text}>today</div>
              </div>

              <div className={styles.yourMessage}>
                <div className={styles.files}>
                  <div className={styles.file}>
                    <FileIcon />

                    <div className={styles.fileInfo}>
                      <strong>RevenueUpdates.pdf</strong>
                      <span>1.3Mb</span>
                    </div>

                    <DownloadIcon />
                  </div>

                  <div className={styles.file}>
                    <FileIcon />

                    <div className={styles.fileInfo}>
                      <strong>TrackingUpdates.doc</strong>
                      <span>1.6Mb</span>
                    </div>

                    <DownloadIcon />
                  </div>
                </div>
                <div className={styles.message}>
                  <p>Excepteur sint occaecat cupidatat</p>
                </div>
              </div>

              <div className={styles.userMessage}>
                <div className={styles.avatar}>
                  <img src="https://i.imgur.com/1yoI9tF.png" width="100%" />
                </div>

                <div className={styles.content}>
                  <strong>Dylan Murray</strong>
                  <div className={styles.message}>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div className={styles.message}>
                    <p>Very good!</p>
                  </div>
                  <small>3:54 PM</small>
                </div>
              </div>
            </div>

            <div className={styles.form}>
              <div className={styles.input}>
                <input placeholder="Type your message" />

                <div className={styles.actions}>
                  <button>
                    <MicrophoneIcon />
                  </button>

                </div>
              </div>
              <button>
                <SendIcon />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Ecommerce;