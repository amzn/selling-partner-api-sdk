<?php
/**
 * PreferenceTest
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
use OpenAPI\Client\Model\replenishment\Preference;

/**
 * PreferenceTest Class Doc Comment
 *
 * @category    Class
 * @description Offer preferences that you can include in the result filter criteria.
 * @package     OpenAPI\Client
 */
class PreferenceTest extends TestCase
{

    private Preference $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Preference();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Preference"
     */
    public function testPreference()
    {
        $this->assertInstanceOf(Preference::class, $this->model);
    }

    /**
     * Test attribute "auto_enrollment"
     */
    public function testPropertyAutoEnrollment()
    {
        $testValue = [];
        
        $this->model->setAutoEnrollment($testValue);
        $this->assertEquals($testValue, $this->model->getAutoEnrollment());
    }
}
