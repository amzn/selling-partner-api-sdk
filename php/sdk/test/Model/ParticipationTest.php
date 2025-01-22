<?php
/**
 * ParticipationTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\sellers\Participation;

/**
 * ParticipationTest Class Doc Comment
 *
 * @category    Class
 * @description Information that is specific to a seller in a marketplace.
 * @package     OpenAPI\Client
 */
class ParticipationTest extends TestCase
{

    private Participation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Participation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Participation"
     */
    public function testParticipation()
    {
        $this->assertInstanceOf(Participation::class, $this->model);
    }

    /**
     * Test attribute "is_participating"
     */
    public function testPropertyIsParticipating()
    {
        $testValue = true;
        
        $this->model->setIsParticipating($testValue);
        $this->assertEquals($testValue, $this->model->getIsParticipating());
    }

    /**
     * Test attribute "has_suspended_listings"
     */
    public function testPropertyHasSuspendedListings()
    {
        $testValue = true;
        
        $this->model->setHasSuspendedListings($testValue);
        $this->assertEquals($testValue, $this->model->getHasSuspendedListings());
    }
}
