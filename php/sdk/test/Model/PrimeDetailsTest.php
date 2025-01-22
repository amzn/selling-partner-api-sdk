<?php
/**
 * PrimeDetailsTest
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
use OpenAPI\Client\Model\pricing\v2022_05_01\PrimeDetails;

/**
 * PrimeDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Amazon Prime details.
 * @package     OpenAPI\Client
 */
class PrimeDetailsTest extends TestCase
{

    private PrimeDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrimeDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrimeDetails"
     */
    public function testPrimeDetails()
    {
        $this->assertInstanceOf(PrimeDetails::class, $this->model);
    }

    /**
     * Test attribute "eligibility"
     */
    public function testPropertyEligibility()
    {
        $enumInstance = new PrimeDetails();
        $allowedValues = $enumInstance->getEligibilityAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setEligibility($testValue);
        $this->assertEquals($testValue, $this->model->getEligibility());
    }
}
