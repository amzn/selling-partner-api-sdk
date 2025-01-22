<?php
/**
 * NonPartneredSmallParcelPackageInputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\NonPartneredSmallParcelPackageInput;

/**
 * NonPartneredSmallParcelPackageInputTest Class Doc Comment
 *
 * @category    Class
 * @description The tracking number of the package, provided by the carrier.
 * @package     OpenAPI\Client
 */
class NonPartneredSmallParcelPackageInputTest extends TestCase
{

    private NonPartneredSmallParcelPackageInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new NonPartneredSmallParcelPackageInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "NonPartneredSmallParcelPackageInput"
     */
    public function testNonPartneredSmallParcelPackageInput()
    {
        $this->assertInstanceOf(NonPartneredSmallParcelPackageInput::class, $this->model);
    }

    /**
     * Test attribute "tracking_id"
     */
    public function testPropertyTrackingId()
    {
        $testValue = 'test';
        
        $this->model->setTrackingId($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingId());
    }
}
