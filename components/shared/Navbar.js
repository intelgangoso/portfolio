import {useState, useEffect} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Link from 'next/link';
import withApollo from '@/hoc/withApollo';
import {useLazyGetUser} from '@/apollo/actions';
import {useRouter} from 'next/router';

const AppLink = ({children, className, href, as}) => 
    <Link href={href} as={as}>
        <a className={className}>{children}</a>
    </Link>
;

const AppNavbar = () => {
    const [user, setUser] = useState(null);
    const [hasResponse, setHasResponse] = useState(false);
    const [getUser, {data, error}] = useLazyGetUser();

    const router = useRouter();

    useEffect(() => {
        getUser();
    }, []);
 
    if (data) {
        if (data.user && !user) {
            setUser(data.user);
        }

        if (!data.user && user) {
            setUser(null);
        }

        if (!hasResponse) {
            setHasResponse(true);
        }
    }

    return (
        <>
            <div className="navbar-wrapper">
                <Navbar expand="lg" className="navbar-dark">
                    <Navbar.Brand className="mr-auto">
                        <AppLink href="/" className="mr-3 navbar-brand font-weight-bold">
                            Crystel G
                        </AppLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <AppLink href="/experience" className={`mr-3 nav-link ${router.pathname.includes('/experience') ? 'font-weight-bold text-white' : ''}`} >
                                Experience
                            </AppLink>
                            <AppLink href="/forum/skills" className={`mr-3 nav-link ${router.pathname.includes('/forum/skills') ? 'font-weight-bold text-white' : ''}`} >
                                Skills
                            </AppLink>
                            {/* <AppLink href="#" className="mr-3 nav-link">
                                CV
                            </AppLink> */}
                        </Nav>
                        {
                            hasResponse &&
                            <Nav id="basic-nav-dropdown">
                                {
                                    user &&
                                    <>
                                        <span className="nav-link mx-2">Welcome {user.username}</span>
                                            {
                                                (user.role === 'admin') && 
                                                <>
                                                    <NavDropdown className="mx-2" title="Manage">
                                                        <AppLink href="/experience/new" className="dropdown-item">
                                                            Create Portfolio
                                                        </AppLink>
                                                        <NavDropdown.Divider />
                                                        <AppLink href="/admin/[id]/dashboard" as={`/admin/${user._id}/dashboard`} className="dropdown-item">
                                                            Dashboard
                                                        </AppLink>
                                                    </NavDropdown>
                                                </>
                                            }
                                        <AppLink href="/logout" className="mx-2 btn btn-danger">
                                            Sign Out
                                        </AppLink>
                                    </>
                                }
                                {
                                    (error || !user) &&
                                    <>
                                        <AppLink href="/login" className="mr-3 nav-link">
                                            Sign In
                                        </AppLink>
                                        <AppLink href="/register" className="mr-3 nav-link btn btn-success bg-green-2 bright">
                                            Sign Up
                                        </AppLink>
                                    </>
                                }
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default withApollo(AppNavbar);