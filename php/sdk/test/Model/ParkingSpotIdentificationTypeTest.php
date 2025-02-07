<?php
/**
 * ParkingSpotIdentificationTypeTest
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
use OpenAPI\Client\Model\supplySources\v2020_07_01\ParkingSpotIdentificationType;

/**
 * ParkingSpotIdentificationTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of parking spot identification.
 * @package     OpenAPI\Client
 */
class ParkingSpotIdentificationTypeTest extends TestCase
{

    private ParkingSpotIdentificationType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ParkingSpotIdentificationType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ParkingSpotIdentificationType"
     */
    public function testParkingSpotIdentificationType()
    {
        $this->assertInstanceOf(ParkingSpotIdentificationType::class, $this->model);
    }
}
