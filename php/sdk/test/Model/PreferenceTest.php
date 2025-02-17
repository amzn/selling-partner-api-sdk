<?php
/**
 * PreferenceTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\replenishment\v2022_11_07\Preference;

/**
 * PreferenceTest Class Doc Comment
 *
 * @category    Class
 * @description Offer preferences that you can include in the result filter criteria.
 * @package     SpApi
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
