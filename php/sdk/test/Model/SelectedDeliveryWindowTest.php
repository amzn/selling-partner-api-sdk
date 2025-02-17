<?php
/**
 * SelectedDeliveryWindowTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\SelectedDeliveryWindow;

/**
 * SelectedDeliveryWindowTest Class Doc Comment
 *
 * @category    Class
 * @description Selected delivery window attributes.
 * @package     SpApi
 */
class SelectedDeliveryWindowTest extends TestCase
{

    private SelectedDeliveryWindow $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SelectedDeliveryWindow();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SelectedDeliveryWindow"
     */
    public function testSelectedDeliveryWindow()
    {
        $this->assertInstanceOf(SelectedDeliveryWindow::class, $this->model);
    }

    /**
     * Test attribute "availability_type"
     */
    public function testPropertyAvailabilityType()
    {
        $testValue = 'test';
        
        $this->model->setAvailabilityType($testValue);
        $this->assertEquals($testValue, $this->model->getAvailabilityType());
    }

    /**
     * Test attribute "delivery_window_option_id"
     */
    public function testPropertyDeliveryWindowOptionId()
    {
        $testValue = 'test';
        
        $this->model->setDeliveryWindowOptionId($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryWindowOptionId());
    }

    /**
     * Test attribute "editable_until"
     */
    public function testPropertyEditableUntil()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEditableUntil($testValue);
        $this->assertEquals($testValue, $this->model->getEditableUntil());
    }

    /**
     * Test attribute "end_date"
     */
    public function testPropertyEndDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndDate($testValue);
        $this->assertEquals($testValue, $this->model->getEndDate());
    }

    /**
     * Test attribute "start_date"
     */
    public function testPropertyStartDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStartDate($testValue);
        $this->assertEquals($testValue, $this->model->getStartDate());
    }
}
