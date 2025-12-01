import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';
import { teamMembers } from '@/data/team';
import Breadcrumb from '@/components/common/Breadcrumb';

export default function TeamMemberPage() {
  const { id } = useParams<{ id: string }>();
  const member = teamMembers.find(m => m.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!member) {
    return <Navigate to="/about" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Our Team', href: '/about#team' },
              { label: member.name }
            ]} 
          />
          <Card className="p-8">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-primary">{member.initials}</span>
                  )}
                </div>
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
                <p className="text-xl text-primary mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${member.email}`} className="hover:text-primary">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    <a 
                      href="https://www.linkedin.com/in/fionnhourican" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Experience</h2>
                <ul className="space-y-2">
                  {member.experience.map((exp, index) => (
                    <li key={index} className="text-muted-foreground">• {exp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Education</h2>
                <ul className="space-y-2">
                  {member.education.map((edu, index) => (
                    <li key={index} className="text-muted-foreground">• {edu}</li>
                  ))}
                </ul>
              </div>

              {member.certifications && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Certifications</h2>
                  <ul className="space-y-2">
                    {member.certifications.map((cert, index) => (
                      <li key={index} className="text-muted-foreground">• {cert}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
