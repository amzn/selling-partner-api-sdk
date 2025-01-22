<?php
/**
 * AutoEnrollmentPreferenceTest
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
use OpenAPI\Client\Model\replenishment\AutoEnrollmentPreference;

/**
 * AutoEnrollmentPreferenceTest Class Doc Comment
 *
 * @category    Class
 * @description The auto-enrollment preference indicates whether the offer is opted-in to or opted-out of Amazon&#39;s auto-enrollment feature.
 * @package     OpenAPI\Client
 */
class AutoEnrollmentPreferenceTest extends TestCase
{

    private AutoEnrollmentPreference $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AutoEnrollmentPreference();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AutoEnrollmentPreference"
     */
    public function testAutoEnrollmentPreference()
    {
        $this->assertInstanceOf(AutoEnrollmentPreference::class, $this->model);
    }
}
