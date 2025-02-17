<?php
/**
 * HandoverMethodTest
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
use SpApi\Model\easyship\v2022_03_23\HandoverMethod;

/**
 * HandoverMethodTest Class Doc Comment
 *
 * @category    Class
 * @description Identifies the method by which a seller will hand a package over to Amazon Logistics.
 * @package     SpApi
 */
class HandoverMethodTest extends TestCase
{

    private HandoverMethod $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new HandoverMethod();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "HandoverMethod"
     */
    public function testHandoverMethod()
    {
        $this->assertInstanceOf(HandoverMethod::class, $this->model);
    }
}
