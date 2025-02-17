<?php
/**
 * OwnerConstraintTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\OwnerConstraint;

/**
 * OwnerConstraintTest Class Doc Comment
 *
 * @category    Class
 * @description A constraint that can apply to an individual owner. If no constraint is specified, both &#x60;AMAZON&#x60; and &#x60;SELLER&#x60; are acceptable.
 * @package     SpApi
 */
class OwnerConstraintTest extends TestCase
{

    private OwnerConstraint $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OwnerConstraint();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OwnerConstraint"
     */
    public function testOwnerConstraint()
    {
        $this->assertInstanceOf(OwnerConstraint::class, $this->model);
    }
}
