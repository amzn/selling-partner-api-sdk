<?php
/**
 * UpdatePackageDetailsTest
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
use SpApi\Model\easyship\v2022_03_23\UpdatePackageDetails;

/**
 * UpdatePackageDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Request to update the time slot of a package.
 * @package     SpApi
 */
class UpdatePackageDetailsTest extends TestCase
{

    private UpdatePackageDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdatePackageDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdatePackageDetails"
     */
    public function testUpdatePackageDetails()
    {
        $this->assertInstanceOf(UpdatePackageDetails::class, $this->model);
    }

    /**
     * Test attribute "scheduled_package_id"
     */
    public function testPropertyScheduledPackageId()
    {
        
        $testValue = new \SpApi\Model\easyship\v2022_03_23\ScheduledPackageId();
        
        $this->model->setScheduledPackageId($testValue);
        $this->assertEquals($testValue, $this->model->getScheduledPackageId());
    }

    /**
     * Test attribute "package_time_slot"
     */
    public function testPropertyPackageTimeSlot()
    {
        
        $testValue = new \SpApi\Model\easyship\v2022_03_23\TimeSlot();
        
        $this->model->setPackageTimeSlot($testValue);
        $this->assertEquals($testValue, $this->model->getPackageTimeSlot());
    }
}
